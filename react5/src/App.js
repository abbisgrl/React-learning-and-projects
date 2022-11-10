import React from 'react';
import './App.css';
import Form from './Form';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  addTask = (task) => {
    this.setState({
      list: [...this.state.list, task]
    })
  }

  removeTask = (task) => {
    const newArray = this.state.list.filter((item, index) => index !== task);
    this.setState({
      list: newArray
    })
  }

  editTask = (taskIndex, editTask, date) => {
    this.state.list.forEach((item, index) => {
      if (index === taskIndex) {
        item.task = editTask;
        item.date = date;
      }
    })
    this.setState({
      list: this.state.list
    })
  }

  handleStatus = (task) => {
    this.state.list.forEach((item, index) => {
      if (index === task) {
        item.status = !item.status;
      }
    })
    this.setState({
      list: this.state.list
    })
  }
  render() {
    return (
      <div className="App">
        <div id='name'>TODO LIST</div>
        <Form task={this.addTask} />
        <TaskContainer list={this.state.list} delete={this.removeTask} complete={this.handleStatus} edit={this.editTask} />
      </div>
    );
  }
}

export default App;
