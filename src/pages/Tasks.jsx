import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ListItem from "../components/ListItem/index";
import background from "../assets/notesBackground.jpeg";
import "animate.css";

function Task() {
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (savedTaskList) {
      setTaskList(savedTaskList);
    }
  }, []);

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedList = [...taskList];
      updatedList[editIndex] = { task, taskDescription };
      setTaskList(updatedList);
      setEditIndex(null);
    } else {
      const newTask = { task, taskDescription };
      setTaskList([...taskList, newTask]);
    }

    localStorage.setItem(
      "taskList",
      JSON.stringify([...taskList, { task, taskDescription }])
    );

    setTask("");
    setTaskDescription("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTask(taskList[index].task);
    setTaskDescription(taskList[index].taskDescription);
  };

  const handleDelete = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
    localStorage.setItem("taskList", JSON.stringify(updatedList));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Hero>
        <h1 className="animate__animated animate__backInLeft ">
          Welcome to Your Task List!
        </h1>
      </Hero>
      <Container style={{ backgroundColor: "#deb887" }}>
        <Row>
          <Col size="md-6">
            <h2
              style={{
                textAlign: "center",
                backgroundColor: "#deb887",
                borderRadius: "5px",
              }}
            >
              Add/Edit Task:
            </h2>
            <div className="form-group">
              <label style={{ fontSize: "12" }} htmlFor="taskInput">
                Task:
              </label>
              <input
                style={{ fontSize: "12" }}
                type="text"
                className="form-control"
                id="taskInput"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="taskDescriptionInput">Task Description:</label>
              <textarea
                className="form-control"
                id="taskDescriptionInput"
                rows="3"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              ></textarea>
            </div>
            <span onClick={handleSave} className="addEntry-button">
              Add Entry <FaPlusCircle className="mb-1" />
            </span>
          </Col>
          <Col size="md-6">
            <h2
              style={{
                textAlign: "center",
                backgroundColor: "#deb887",
                borderRadius: "5px",
              }}
            >
              Task List:
            </h2>
            <ul className="list-group">
              {taskList.map((taskItem, index) => (
                <ListItem
                  key={index}
                  taskItem={taskItem}
                  index={index}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Task;
