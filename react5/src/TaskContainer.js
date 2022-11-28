import React from "react";
import EditPop from "./EditPop";
import { connect } from 'react-redux';
import { deleteTask, doneTask } from './actions';
class TaskContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            done: false,
        }
    }
    handleRemove = (index) => {
        this.props.deleteTask(index);
    }

    handleStatus = (index) => {
        this.props.doneTask(index);
    }
    render() {
        if (this.props?.list?.length === 0) {
            return (<div id="taskContainer" className="example">
                <span>Add Your Task</span>
            </div>
            )
        } else {
            return (
                <div id="taskContainer" className="example">
                    <span>Your Tasks</span>
                    {this.props.task.map((item, index) => {
                        return (
                            <div id="task" key={index}>
                                {item.status ? <div className="textDecoration"><div>{item.task}</div>
                                    <div>{item.date}</div></div> : <div><div>{item.task}</div>
                                    <div>{item.date}</div></div>}
                                <button onClick={() => { this.handleRemove(index) }} style={{ backgroundColor: 'red', fontWeight: '700' }}>Delete</button>
                                <EditPop index={index} />
                                <button onClick={() => { this.handleStatus(index) }} style={{ backgroundColor: 'green', fontWeight: '700' }}>{item.status ? 'Uncomplete' : 'Complete'}</button>

                            </div>
                        )
                    })}
                </div>

            )
        }

    }
}

const mapStateToProps = (state) => ({
    task: state.task
})

export default connect(mapStateToProps, { deleteTask, doneTask })(TaskContainer)