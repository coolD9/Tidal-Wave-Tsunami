import React from 'react';
import './App.css';

function App() {
  return (
  // The main title and team name are displayed in a bar at the top of the app
    <div className="App">
      <div className="bar">
        <h1 className="bar-title">Student Schedule Optimizer</h1>
        <h2 className="team-title">Wave Tsunami</h2>
      </div>

      <div className="Main-container">
        <div className="Left-container">
          <h2 className="left-title">Main Content Area</h2>
          <p>This is where the main content of the app will be displayed.</p>
        </div>

        <div className="Right-container">
          <h2 className="right-title">Sidebar</h2>
          <p>This is where the sidebar content will be displayed.</p>
        </div>
      </div>
    </div>  
  );
}

export default App;
