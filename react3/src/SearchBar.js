import React from "react";
import Card from './Card';
class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
        //to use a function then we used to this otherwise the value of this is different when we call that function.
        this.handleChange = this.handleChange.bind(this)
    }

    //if you don't want to used bind then you can write the functions as a arrow function
    handleChange(e) {
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
            <>
                {/* first way of handling the events using arrow function */}
                {/* <input type = 'text' value={this.state.item} onChange={(e)=>this.setState({item:e.target.value})} /> */}
                {/* Second way of handling the events using function call .But for using this we have to first bind the value of this */}
                <div className="inputContainer">
                    <form onSubmit={this.onSubmit}>
                        <label id="lable">Image Searcher</label>
                        <input
                            type='text'
                            value={this.state.item}
                            onChange={this.handleChange} />
                    </form>
                </div>
            </>

        )
    }
}

export default SearchBar;