import React from "react";

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.place === '' ? "Your place is" : `Your place is :${this.props.place} and currently its ${this.props.month}`}</h1>
                <h1>{this.props.error !== '' ? this.props.error : 'NO Error'}</h1>
                <button onClick={this.props.getPosition}>Get Your Country</button>
                <h1>{this.props.firstName}</h1>
                <h1>{this.props.lastName}</h1>
                <button onClick={this.props.handleClick}>set the name</button>
            </div>
        )
    }
}

export default Main;