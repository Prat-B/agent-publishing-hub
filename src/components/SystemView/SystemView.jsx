import React from 'react';
import './SystemView.css';
import { systemMetrics, partnerMetrics, stageMetrics, failureReasons, systemInsights } from '../../data/mockData';

export default function SystemView() {
  const trendData = [45, 52, 38, 65, 85, 70, 95]; // mock weekly submission trend

  return (
    <div className="system-view">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1>System Operations</h1>
          <p>Global observability for publisher network health, pipeline bottlenecks, and metrics.</p>
        </div>
      </div>

      {/* Embedded AI System Insights */}
      {systemInsights.map(sysIns => (
        <div key={sysIns.id} className="system-insights-banner">
          <div className="insight-icon">
            {sysIns.severity === 'high' ? '🚨' : sysIns.severity === 'medium' ? '⚠️' : 'ℹ️'}
          </div>
          <div>
            <h3>{sysIns.title}</h3>
            <p className="mt-2">{sysIns.description}</p>
          </div>
        </div>
      ))}

      {/* Top Metric Cards */}
      <div className="metrics-grid mt-6">
        <div className="metric-card">
          <div className="metric-title">Submission Volume (7d)</div>
          <div className="metric-value">{systemMetrics.submission_volume}</div>
          <div className="metric-trend trend-down">↑ 12% vs last week</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Validation Failure Rate</div>
          <div className="metric-value">{systemMetrics.validation_failure_rate}%</div>
          <div className="metric-trend trend-up">↑ 2.1% anomaly</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Approval Rate</div>
          <div className="metric-value">{systemMetrics.approval_rate}%</div>
          <div className="metric-trend trend-down">↓ 1.4%</div>
        </div>
        <div className="metric-card">
          <div className="metric-title">Avg Time to Publish</div>
          <div className="metric-value">{(systemMetrics.avg_time_to_publish_minutes / 60).toFixed(1)}h</div>
          <div className="metric-trend">Stable</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="charts-grid">
        {/* Weekly Trend Chart Mock */}
        <div className="chart-card">
          <div className="chart-header">Submission Volume Trend</div>
          <div className="trend-chart">
            {trendData.map((val, idx) => (
              <div 
                key={idx} 
                className="trend-bar" 
                style={{ height: `${val}%` }}
                title={`${val} submissions`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-secondary" style={{ fontSize: '0.75rem' }}>
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Failure Reasons Bar Chart */}
        <div className="chart-card">
          <div className="chart-header">Top Failure Reasons</div>
          <div className="bar-chart">
            {failureReasons.map((reason, idx) => (
              <div key={idx} className="bar-row">
                <div className="bar-label" title={reason.category}>{reason.category}</div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${reason.percentage}%` }} />
                </div>
                <div className="bar-value">{reason.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Performance Table */}
      <div className="chart-card mb-6">
        <h3 className="mb-4">Partner Performance Matrix</h3>
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Partner Name</th>
                <th>Total Agents</th>
                <th>Success Rate</th>
                <th>Failure Rate</th>
                <th>Avg Publish Time</th>
              </tr>
            </thead>
            <tbody>
              {partnerMetrics.map((p, i) => (
                <tr key={i}>
                  <td><strong>{p.partner_name}</strong></td>
                  <td>{p.total_agents}</td>
                  <td className="success-text">{p.success_rate}%</td>
                  <td className={p.failure_rate > 20 ? 'error-text' : ''}>{p.failure_rate}%</td>
                  <td>{(p.avg_time_to_publish / 60).toFixed(1)} hrs</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stage SLA Metrics */}
      <div className="chart-card">
        <h3 className="mb-4">Pipeline Stage Health</h3>
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Avg Time (min)</th>
                <th>SLA Threshold (min)</th>
                <th>SLA Breach Rate</th>
              </tr>
            </thead>
            <tbody>
              {stageMetrics.map((st, i) => (
                <tr key={i}>
                  <td style={{ textTransform: 'capitalize' }}>{st.stage}</td>
                  <td>{st.avg_time_minutes}</td>
                  <td>{st.sla_threshold_minutes}</td>
                  <td>
                    <span className={`badge ${st.sla_breach_percentage > 5 ? 'badge-error' : 'badge-success'}`}>
                      {st.sla_breach_percentage}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
