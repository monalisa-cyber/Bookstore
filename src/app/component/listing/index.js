import React, { useState } from "react";
import "./listing.css";
import Modal from "react-modal";

import AddLoginModal from "../AddLoginModal";
import { Card, Button, Row, Col } from "react-bootstrap";

function Listing({ posts, loading, setModalIsOpenToTrue }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  // const list = []
  // for (let i=0;i<4;i++) {
  //   list.push({posts.map())
  // }
  // console.log(list);
  return (
    <div className="Listing">
     
      <div class="cssmarquee">
        <h1>Choose Your Favorite Books </h1>
      </div>
      <div>
        <div>
          <Row style={{ margin: "17px" }}>
            {posts.map((pd, idx) => (
              <Col key={idx} md={3} sm={4} xs={12}>
                <Card style={{ margin: "10px" }}>
                  <Card.Img
                    top
                    height="200px"
                    src={pd.image}
                    alt="Card image cap"
                  />
                  <Card.Body id="card-body-style">
                    <Card.Title id="title_justify">{pd.title}</Card.Title>
                    {/* <Card.Subtitle style={{ width: '18rem',margin:"center"}}>{pd.description}</Card.Subtitle> */}
                    <Card.Text id="title_justify">₹{pd.price}</Card.Text>
                    <Card.Text>{pd.catagory}</Card.Text>
                    <Card.Text >{pd.description}</Card.Text>
                    <Button
                      onClick={setModalIsOpenToTrue}
                      style={{ backgroundColor: "orange" }}
                    >
                      Add to cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Listing;
