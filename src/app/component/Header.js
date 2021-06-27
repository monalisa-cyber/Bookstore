import React from "react";
import brand from './images/brand.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
import { Navbar, Nav, Row, Col, Image, Container, Badge } from "react-bootstrap";
function Header() {

  return (
    <div id="navDiv">
      <Navbar bg="green" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Container>
          <Row>
            <Col className='d-none d-sm-block' > 
            <Image  src={brand} width="70px" style={{ margin: "2px 20px" }} rounded />
            </Col>

          </Row>
          <Row>



            <div id="brand">&#128218; Bookstore &#128218;</div>

          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Badge bg="primary" style={{ color: "red" }} >New</Badge>
              <Image src="https://banner2.kisspng.com/20171217/01f/shopping-cart-png-5a364b6d3217e8.4884266315135076932052.jpg" width="30px" height="30px" rounded />

            </Col>
          </Row>
        </Container>


      </Navbar>
    </div>
  );
}

export default Header;
