import React from "react";
import Card from 'react-bootstrap/Card';

class ProductCard extends React.Component {
    render() {
        const { product } = this.props
        return (
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={`${product.image}`} style={{ height: '100px', width: '160px' }} />
                <Card.Body>
                    <Card.Title>{product.title.slice(0, 20)}</Card.Title>
                    <Card.Text style={{ fontSize: '12px' }}>
                        <div className="fontWeight">Description</div>
                        {product.description.slice(0, 300)}
                    </Card.Text>
                    <Card.Text className="fontWeight">
                        {`Price: ${product.price}＄`}
                    </Card.Text>
                    <Card.Text className="fontWeight">
                        {`Rating: ${product.rating.rate}★`}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;