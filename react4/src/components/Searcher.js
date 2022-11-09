import React from "react";

class Searcher extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }

    //if you don't want to used bind then you can write the functions as a arrow function
    handleChange=(e) =>{
        this.setState({
            item: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.item);
    }
    render() {
        return (
            <div className="inputContainer">
                <form onSubmit={this.onSubmit}>
                    <label id="lable">Video Searcher</label>
                    <input
                        type='text'
                        value={this.state.item}
                        onChange={this.handleChange} />
                </form>
            </div>

        )
    }
}

export default Searcher;