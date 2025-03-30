import React, { useState } from 'react';

function ToggleMessage() {
  // Declare a state variable 'isVisible' to track the visibility of the message
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility of the message
  const toggleVisibility = () => {
    setIsVisible(!isVisible);  // Toggle the value of 'isVisible' (true/false)
  };

  return (
    <div className="toggle-message">
      {/* Button to toggle the message */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Message' : 'Show Message'}
      </button>

      {/* Conditionally render the message if 'isVisible' is true */}
      {isVisible && <p className="message">Hello, I am Yadhavaramanan C from MKCE!</p>}
    </div>
  );
}

export default ToggleMessage;
