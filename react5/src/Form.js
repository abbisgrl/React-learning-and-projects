import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: '',
        }
        
    }

    handleForm = (e) => {
        e.preventDefault();
        const task = {
            task: this.state.task,
            date: this.state.date,
            status: false
        }
        this.props.addTask(task);
    }
    render() {
        return (
            <div id="formContainer">
                <form onSubmit={this.handleForm} id="form">
                    <label htmlFor="task">Task</label>
                    <input type='text' id="task" value={this.state.task} onChange={(e) => this.setState({ task: e.target.value })} />
                    <label htmlFor="date">Date</label>
                    <input type='date' id="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} />
                    <button id="Add Task">Add Task</button>
                </form>
            </div>
        )
    }
}

export default Form;