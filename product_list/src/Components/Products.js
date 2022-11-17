import React from "react";
import Card from "./ProductCard";
import Navbar from './Navbar';
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then((result) => {
                return result.json()
            })
            .then((resp) => {
                // console.log(resp)
                this.setState({
                    products: resp,
                })
            })
    }

    handleSort = (e) => {
        const options = {
            "Select": [...this.state.products],
            "Most Popular": [...this.state.products].sort((a, b) => b.rating.rate - a.rating.rate),
            "Low to High": [...this.state.products].sort((a, b) => a.price - b.price),
            "High to low": [...this.state.products].sort((a, b) => b.price - a.price),
        }
        this.setState({
            products: options[e.target.value]
        })
    }

    render() {
        return (
            <>
                <Navbar />
                <div style={{marginLeft:'2%',marginTop:'2%'}}>
                    <label htmlFor="sort" className="fontWeight">Sort : </label>
                    <select id="sort" onChange={this.handleSort}>
                        <option>Select</option>
                        <option>Most Popular</option>
                        <option>Low to High</option>
                        <option>High to low</option>
                    </select>
                </div>
                <div id="productList">
                    {this.state.products.map((item) => {
                        return <Card key={item.id} product={item} />
                    })}
                </div>
            </>
        )
    }
}

export default Products;