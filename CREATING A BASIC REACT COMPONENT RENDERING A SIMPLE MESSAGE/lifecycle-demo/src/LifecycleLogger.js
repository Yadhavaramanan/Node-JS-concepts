import React, { Component } from 'react';

class LifecycleLogger extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Component is being constructed.');
    // Initial state
    this.state = { message: 'Hello, World!' };
  }

  // Invoked immediately after the component is mounted (inserted into the DOM tree)
  componentDidMount() {
    console.log('componentDidMount: Component has been mounted.');
  }

  // Invoked immediately after updating occurs (state or props change)
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has been updated.');
    console.log('Previous State:', prevState); // Previous state before the update
    console.log('Current State:', this.state);  // Current state after the update
  }

  // Invoked immediately before the component is unmounted and destroyed
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted.');
  }

  // Method to change the message in the state
  changeMessage = () => {
    this.setState({ message: 'Hello, React!' });
  };

  // Render method returns JSX to display on the UI
  render() {
    console.log('Render: Component is rendering.');
    return (
      <div className="lifecycle-logger">
        {/* Displays the current state message */}
        <h2>{this.state.message}</h2>
        {/* Button to trigger state change */}
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default LifecycleLogger;
