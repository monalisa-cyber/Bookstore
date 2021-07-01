import React from "react";
import brand from "./images/brand.png";
import Cart from "./images/cart.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import {
  Navbar,
  Nav,
  Row,
  Col,
  Image,
  Container,
  Badge,
} from "react-bootstrap";

function Header() {
  
  return (
    <div id="navDiv">
      <Navbar bg="" expand="lg">
        <Container>
          <Row>
            <Col className="d-none d-sm-block">
              <Image
                src={brand}
                width="70px"
                style={{ margin: "2px 20px" }}
                rounded
              />
            </Col>
          </Row>
          <Row>
            <div id="brand">&#128218; Bookstore &#128218;</div>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <Badge id="count" bg="primary" style={{ color: "red" }}>
                0
              </Badge>
              <Image src={Cart} width="50px" height="50px" rounded />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
