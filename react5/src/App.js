import React from 'react';
import './App.css';
import Form from './Form';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      list:[]
    }
  }

  addTask = (task)=>{
    this.setState({
      list:[...this.state.list,task]
    })
  }

  removeTask = (task)=>{
    const newArray = this.state.list.filter((item,index)=>index!==task);
    this.setState({
      list:newArray
    })
  }
  render() {
    return (
      <div className="App">
        <div id='name'>TODO LIST</div>
        <Form task={this.addTask}/>
        <TaskContainer list={this.state.list} complete={this.removeTask}/>
      </div>
    );
  }
}

export default App;
