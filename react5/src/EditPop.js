import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { connect } from 'react-redux'
import { editTask } from './actions'
class EditPop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: '',
        }
    }
    editSubmit = (e) => {
        e.preventDefault();
        this.props.editTask({ index: this.props.index, task: this.state.task, date: this.state.date })
    }
    render() {
        return (
            <Popup trigger={<button>Edit</button>}
                position="right center">
                <form onSubmit={this.editSubmit} id="form" style={{ backgroundColor: 'grey' }}>
                    <label htmlFor="task">Task</label>
                    <input type='text' id="task" value={this.state.task} onChange={(e) => this.setState({ task: e.target.value })} />
                    <label htmlFor="date">Date</label>
                    <input type='date' id="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} />
                    <button id="Add Task">Edit Task</button>
                </form>
            </Popup>
        )
    }
}
const mapStateToProps = null;
export default connect(mapStateToProps, { editTask })(EditPop)