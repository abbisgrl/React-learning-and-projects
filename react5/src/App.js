import React from 'react';
import './App.css';
import Form from './Form';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id='name'>TODO LIST</div>
        <Form />
        <TaskContainer />
      </div>
    );
  }
}

export default App;
