import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbars from 'react-bootstrap/Navbar';

class Navbar extends React.Component {
    render() {
        return (
            <>
                <Navbars bg="dark" variant="dark">
                    <Container>
                        <Navbars.Brand href="/">Products</Navbars.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/addproduct">Add Product</Nav.Link>
                        </Nav>
                    </Container>
                </Navbars>
            </>
        )
    }
}

export default Navbar;