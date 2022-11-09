import React from "react";

class TaskContainer extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    handleClick=(index)=>{
        this.props.complete(index);
    }
    render() {
        return (
            <div id="taskContainer">
                {this.props.list.map((item,index) => {
                    return (
                        <div id="task" key={index}>
                            <div>{item.task}</div>
                            <div>{item.date}</div>
                            <button onClick={()=>{this.handleClick(index)}}>Complete</button>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default TaskContainer;