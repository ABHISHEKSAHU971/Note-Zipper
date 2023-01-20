import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card, NavLink } from "react-bootstrap";
import Mainscreen from "./../../component/Mainscreen";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { ListNotes } from "./../../Action/noteAction";

const Mynotes = () => {
  const dispatch = useDispatch();

  const Axios = axios.create({
    baseURL: "http://localhost:5000/",
    withCredentials: true,
  });
  const deleteHandler = (id) => {
    if (window.confirm("Are You sure.?")) {
    }
  };

  useEffect(() => {
    dispatch(ListNotes);
    // fm();
  }, [dispatch]);
  // const fm = async () => {
  //   // const config = {
  //   //   headers: {
  //   //     Authorization: `Bearer ${userInfo.token}`,
  //   //   },
  //   // };

  //   const { data } = await axios.get("http://localhost:5000/notes", {
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });
  //   console.log("data my notes", data);
  // };

  const notelist = useSelector((state) => state.notelist);
  console.log("notelist abhi", notelist);
  // const { notes } = notelist;
  const notes = [];

  return (
    <Mainscreen title="Welcome back Abhishek Sahu..">
      <NavLink to="createnote">
        <Button style={{ fontSize: 18 }}>Create New Note</Button>

        {notes?.map((note) => (
          <Accordion key={`${note._id}`}>
            <Accordion.Item eventKey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      flex: 1,
                      alignSelf: "center",
                      font: 22,
                    }}
                  >
                    <Accordion.Header>{note.title}</Accordion.Header>
                  </span>
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>

                    <Button
                      variant="danger"
                      className="mx-3"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Detele
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge className="bg-success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <div className="card-body">
                      <blockquote className="blockquote mb-0">
                        <p>{note.content}</p>
                        <footer className="blockquote-footer">
                          Created on - data
                        </footer>
                      </blockquote>
                    </div>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </NavLink>
    </Mainscreen>
  );
};

export default Mynotes;
