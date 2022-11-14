import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearch(this.state.term);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Search</label>
                    <input
                        id="search"
                        type='text'
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })} />
                </form>
            </div>
        )
    }
}

export default Input;