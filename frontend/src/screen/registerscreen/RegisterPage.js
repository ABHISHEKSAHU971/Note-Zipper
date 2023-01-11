import React, { useState } from "react";
import Mainscreen from "./../../component/Mainscreen";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import ErrorHandler from "../../component/Errorhandler/ErrorHandler";
import axios from "axios";
import LoaderSpinner from "./../../component/Spinner/Spinner";

const Registerpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pconfirm, setPconfirm] = useState("");
  const [pic, setPic] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const ChangeHandler = async (e) => {
    e.preventDefault();

    if (password !== pconfirm) {
      setMessage("Password do not Match");
    } else {
      setMessage(null);
      try {
        setError(false);
        setLoader(true);
        const { data } = await axios.post(
          "/user/useradd",
          { name, email, password, pic },
          {
            headers: {
              "Content-type": "Application/json",
            },
          }
        );
        console.log(data);
        setLoader(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);

        setLoader(false);
      }
    }
  };

  return (
    <Mainscreen title="REGISTER">
      {error && <ErrorHandler variant="danger">{error}</ErrorHandler>}
      {message && <ErrorHandler variant="danger">{message}</ErrorHandler>}
      {loader && <LoaderSpinner />}
      <Container className="d-flex justify-content-center">
        <Form
          style={{ width: "400px" }}
          onSubmit={ChangeHandler}
          enctype="multipart/form-data"
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPssword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={pconfirm}
              onChange={(e) => setPconfirm(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              Label="Upload Profile Picture"
              name="profile"
              custom
              // onChange={(e) => setPic(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Row className="mt-3 ">
            <Col>
              <p className=" d-flex  ">
                New Costumer ?
                <Link to="/login">
                  <spam className="text-info  " style={{ marginLeft: "10px" }}>
                    Login
                  </spam>
                </Link>
              </p>
            </Col>
          </Row>
        </Form>
      </Container>
    </Mainscreen>
  );
};

export default Registerpage;
