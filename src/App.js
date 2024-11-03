import React from 'react';
import Sidebar from './components/Sidebar';
import ProjectList from './components/ProjectList';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
