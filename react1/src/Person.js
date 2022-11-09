import React from "react";

class Person extends React.Component {
    render() {
        return (
            <div id="commentDetails">
                <span id="name">{this.props.name}</span>
                <span>{this.props.time}</span>
                <div>{this.props.comment}</div>
            </div>
        )
    }
}

export default Person;