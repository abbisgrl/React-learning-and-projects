import React from "react";
import Navbar from './Navbar';

class AddToList extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            category: '',
            description: '',
            price: '',
            selectedFile: null

        }
    }

    handlePost = (e) => {
        console.log(this.state.name, this.state.description, this.state.category, this.state.price)
        e.preventDefault();
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: this.state.name,
                    price: this.state.price,
                    description: this.state.description,
                    image: this.state.selectedFile,
                    category: this.state.category
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))

    }

    handleFileChange = e => {
        e.preventDefault()
        console.log(e.target.value);
        this.setState({ selectedFile: e.target.files['0'].name })
    }

    render() {
        return (
            <div>
                <Navbar />
                <h1 style={{ textAlign: 'center' }}>Add New Product</h1>
                <form id="formContainer" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type='text'
                        id="name"
                        value={this.state.name}
                        placeholder="Enter Product Name"
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type='text'
                        id="description"
                        value={this.state.description}
                        placeholder="Enter Product Details"
                        onChange={(e) => this.setState({ description: e.target.value })}
                    />

                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        type='number'
                        value={this.state.price}
                        placeholder='Enter Price'
                        onChange={(e) => this.setState({ price: e.target.value })}
                    />
                    <label htmlFor="category">Category</label>
                    <input
                        id="category"
                        type='text'
                        value={this.state.category}
                        placeholder='Enter Category'
                        onChange={(e) => this.setState({ category: e.target.value })}
                    />
                    <label htmlFor="image">Image</label>
                    <input
                        id="image"
                        type="file"
                        onChange={e => this.handleFileChange(e)}
                        accept="image/*,.pdf"
                    />
                    {this.state.selectedFile && <img src={this.state.selectedFile} alt='No image add' />}
                    <button type="submit" onClick={this.handlePost}>Add Product confirm</button>
                </form>
            </div>
        )
    }
}

export default AddToList;
