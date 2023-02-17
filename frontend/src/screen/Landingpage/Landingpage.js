import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";

import "./Landingpage.css";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate;

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);
    if (userInfo) {
      navigate("/mynotes");
    }
  }, []);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="text-col ">
            <div>
              <h1 className="title">
                Welcome to Note <br /> Zipper
              </h1>
              <p className="sub-title">One Safe Place for all your notes.</p>
            </div>
            <div className="button-click ">
              <a href="/login">
                <Button>login</Button>
              </a>
              <a href="/register">
                <Button>Signup</Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Landingpage;
