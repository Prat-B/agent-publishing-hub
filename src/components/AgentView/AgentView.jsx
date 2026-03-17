import React, { useState } from 'react';
import './AgentView.css';
import { agents } from '../../data/mockData';

const getBadgeClass = (status) => {
  switch (status) {
    case 'published': return 'badge-success';
    case 'validation_failed': return 'badge-error';
    case 'in_review': return 'badge-warning';
    case 'approved': return 'badge-info';
    default: return 'badge-neutral';
  }
};

const formatStatus = (status) => status.replace('_', ' ');

export default function AgentView() {
  const [selectedAgentId, setSelectedAgentId] = useState(agents[0].id);
  const agent = agents.find(a => a.id === selectedAgentId);

  if (!agent) return <div>Agent not found</div>;

  return (
    <div className="animate-fade-in">
      <div className="agent-view-header">
        <div>
          <h1>Agent Observability</h1>
          <p>Monitor individual agent publishing workflows, failures, and risks.</p>
        </div>
        <select 
          className="agent-selector"
          value={selectedAgentId}
          onChange={(e) => setSelectedAgentId(e.target.value)}
        >
          {agents.map(a => (
            <option key={a.id} value={a.id}>{a.name} ({a.partner}) - {formatStatus(a.status)}</option>
          ))}
        </select>
      </div>

      {/* Post-Publish Alerts */}
      {agent.alerts.map(alert => (
        <div key={alert.id} className="alert-banner">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <div>
            <strong>Alert:</strong> {alert.message}
          </div>
        </div>
      ))}

      {/* Header Card */}
      <div className={`card agent-header-card status-${agent.status}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="agent-title-row">
            <h2>{agent.name}</h2>
            <span className={`badge ${getBadgeClass(agent.status)}`}>
              {formatStatus(agent.status)}
            </span>
          </div>
          <div className="text-right">
            <h4>Partner</h4>
            <div>{agent.partner}</div>
          </div>
        </div>

        {/* Timeline */}
        <h4 className="mt-4">Publishing Flow</h4>
        <div className="timeline-container">
          {agent.stages.map((stage, idx) => (
            <div key={idx} className="timeline-step">
              <div className={`step-circle ${stage.status}`}>
                {stage.status === 'completed' && '✓'}
                {stage.status === 'failed' && '✕'}
                {stage.status === 'in_progress' && '↻'}
              </div>
              <div className="step-label">{stage.stage}</div>
              <div className="step-duration">
                {stage.duration_minutes ? `${stage.duration_minutes} min` : '-'}
              </div>
              {stage.failure_reason && (
                <div className="step-failure">{stage.failure_reason}</div>
              )}
              {stage.rejection_reason && (
                <div className="step-failure">{stage.rejection_reason}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights Embed */}
      <h3>AI Context & Insights</h3>
      {agent.insights.length > 0 ? (
        <div className="insight-grid">
          {agent.insights.map(ins => (
            <div key={ins.id} className={`insight-card severity-${ins.severity}`}>
              <div className="insight-header">
                {ins.type === 'error' ? '🛑' : ins.type === 'warning' ? '⚠️' : '✅'}
                {ins.title}
              </div>
              <div className="insight-desc">{ins.description}</div>
              {ins.suggested_fix && (
                <div className="insight-fix">
                  <span>💡</span>
                  <div>
                    <strong>Suggested Fix:</strong> <br/>
                    {ins.suggested_fix}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mb-4">No specific insights for this agent at this time.</p>
      )}

      {/* Metrics & Debugging Split */}
      <div className="panel-grid">
        <div className="card">
          <h3>Submission History</h3>
          <div className="stat-row">
            <span>Total Submissions</span>
            <span className="stat-value">{agent.metrics.total_submissions}</span>
          </div>
          <div className="stat-row">
            <span>Validation Failures</span>
            <span className="stat-value">{agent.metrics.validation_failures}</span>
          </div>
          <div className="stat-row">
            <span>Manual Rejections</span>
            <span className="stat-value">{agent.metrics.rejections}</span>
          </div>
          <div className="stat-row">
            <span>Total Resubmissions</span>
            <span className="stat-value">{agent.metrics.resubmissions}</span>
          </div>
        </div>

        <div className="card">
          <h3>Debugging Info</h3>
          {agent.status === 'validation_failed' ? (
            <p className="step-failure mt-4">Automated validation blocked the agent layout.</p>
          ) : agent.status === 'in_review' ? (
            <p className="mt-4">Agent is currently under manual review by the policy team. Elevated risk score detected.</p>
          ) : (
            <p className="mt-4">Agent successfully passed all pipeline checks.</p>
          )}
        </div>
      </div>
    </div>
  );
}
