import React, { useState } from 'react';
import AgentView from './components/AgentView/AgentView';
import SystemView from './components/SystemView/SystemView';

function App() {
  const [activeView, setActiveView] = useState('agent'); // 'agent' | 'system'

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <h2>PublishHub</h2>
        <div className="sidebar-nav">
          <div 
            className={`nav-item ${activeView === 'agent' ? 'active' : ''}`}
            onClick={() => setActiveView('agent')}
          >
            Agent Monitoring
          </div>
          <div 
            className={`nav-item ${activeView === 'system' ? 'active' : ''}`}
            onClick={() => setActiveView('system')}
          >
            System Operations
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {activeView === 'agent' ? <AgentView /> : <SystemView />}
      </main>
    </div>
  );
}

export default App;
