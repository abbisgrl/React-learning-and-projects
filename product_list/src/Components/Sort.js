import React from "react";
import Form from 'react-bootstrap/Form';
class Sort extends React.Component {
    constructor() {
        super();
        this.state = {
            isSort: false,
        }
    }


    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.handleSort(this.state.isSort)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Sort by Price"
                    value={this.state.isSort}
                    onChange={(e) => this.setState({ isSort: !this.state.isSort })}
                />
                <button type='submit'>Sort</button>
            </Form>
        )
    }
}

export default Sort;