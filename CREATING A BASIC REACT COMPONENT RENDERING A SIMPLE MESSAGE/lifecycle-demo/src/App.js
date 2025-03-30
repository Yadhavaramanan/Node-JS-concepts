import React, { useState } from 'react';
import './App.css';
import LifecycleLogger from './LifecycleLogger';  // Import the LifecycleLogger component

function App() {
  // State to toggle the LifecycleLogger component
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="App">
      {/* Conditionally render the LifecycleLogger component */}
      {showComponent && <LifecycleLogger />}
      
      {/* Button to toggle component visibility */}
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount Component' : 'Mount Component'}
      </button>
    </div>
  );
}

export default App;
