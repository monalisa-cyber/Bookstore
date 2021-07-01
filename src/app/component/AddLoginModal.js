import { Modal, Button, Form } from "react-bootstrap";
import "./Validation";
import React, { Component } from "react";
import "./Modal.css";

export default class AddLoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Successfully register");
    this.props.setModalIsOpenToFalse();
    event.preventDefault();
  }
  
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton  onClick={this.props.setModalIsOpenToFalse} id="contained-modal-header-vcenter">
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Login Credential</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="contained-modal-body-vcenter">
          <div class="container1">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={!this.state.value}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.setModalIsOpenToFalse}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
