import React, { useState, useEffect } from "react";
import "./listing.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { slice, concat } from "lodash";

export default function Listing({ posts, setModalIsOpenToTrue }) {
  const LENGTH = 100;
  const LIMIT = 10;
  //To check we have more records or not
  const [showMore, setShowMore] = useState(true);
  //Initial render list
  const [list, setList] = useState(slice(posts, 0, LIMIT));
  //For managing the index
  const [index, setIndex] = useState(0);

  const loadMore = () => {
    //It will update the index by adding LIMIT to it
    const newIndex = index + LIMIT;
    //Check for we have more records or not
    const newShowMore = newIndex < LENGTH - 1;
    //Gonna update our list by adding next set to our Array
    const newList = concat(list, slice(posts, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <div className="Listing">
      <div class="cssmarquee">
        <h1>Choose Your Favorite Books </h1>
      </div>
      <div>
        <div>
          <Row style={{ margin: "17px" }}>
            {list.map((pd, idx) => (
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
                    <Card.Text>{pd.description}</Card.Text>
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
      
      {showMore && (
        <button onClick={loadMore} style={{ width: "22%" }}>
          {" "}
          Load More{" "}
        </button>
      )}
    </div>
  );
}
