
import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Button from "../components/Button/button";
import ListItem from "../components/ListItem/index";

function Task() {
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the task being edited

  useEffect(() => {
    // Load saved task list from local storage on component mount
    const savedTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (savedTaskList) {
      setTaskList(savedTaskList);
    }
  }, []);

  const handleSave = () => {
    // If editIndex is not null, it means we are editing an existing task
    if (editIndex !== null) {
      // Update the existing task in the list
      const updatedList = [...taskList];
      updatedList[editIndex] = { task, taskDescription };
      setTaskList(updatedList);
      setEditIndex(null); // Reset editIndex after updating
    } else {
      // Add new task to the list
      const newTask = { task, taskDescription };
      setTaskList([...taskList, newTask]);
    }

    // Save updated task list to local storage whenever it changes
    localStorage.setItem("taskList", JSON.stringify(taskList));

    // Clear input fields after saving
    setTask("");
    setTaskDescription("");
  };

  const handleEdit = (index) => {
    // Set editIndex to the index of the task being edited
    setEditIndex(index);

    // Populate task and taskDescription fields with the current values
    setTask(taskList[index].task);
    setTaskDescription(taskList[index].taskDescription);
  };

  const handleDelete = (index) => {
    // Remove task from the list
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);

    // Save updated task list to local storage whenever it changes
    localStorage.setItem("taskList", JSON.stringify(updatedList));
  };

  return (
    <div>
      <Hero>
        <h1>Welcome to Your Task List!</h1>
      </Hero>
      <Container>
        <Row>
          <Col size="md-6">
            <h2 style={{textAlign:"center"}}>Add/Edit Task:</h2>
            <div className="form-group">
              <label style={{fontSize:"12"}} htmlFor="taskInput">Task:</label>
              <input
                style={{fontSize:"12"}}
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
            <Button
              label={editIndex !== null ? "Update" : "Save"}
              style={{
                backgroundcolor: "blueviolet",
                color: "white",
                border: "none",
                padding: "5px 10px",
                marginleft: "15px",
                cursor: "pointer",
              }}
              onClick={handleSave}
              type="primary"
            />
          </Col>
          <Col size="md-6">
            <h2>Task List:</h2>
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
//   return (
//     <div>
//       <Hero>
//         <h1>Welcome to Your Task List!</h1>
//       </Hero>
//       <Container>
//         <Row>
//           <Col size="md-6">
//             <h2>Add/Edit Task:</h2>
//             {/* Your existing code... */}
//           </Col>
//           <Col size="md-6">
//             <h2>Task List:</h2>
//             <ul className="list-group">
//               {taskList.map((taskItem, index) => (
//                 <li
//                   key={index}
//                   className={`list-group-item ${styles.listItem}`} // Use CSS module class
//                 >
//                   <div>
//                     <span className={styles.task}>{taskItem.task}</span>
//                     <span className={styles.taskDescription}>
//                       - {taskItem.taskDescription}
//                     </span>
//                   </div>
//                   <div className={styles.actions}>
//                     <Button
//                       onClick={() => handleEdit(index)}
//                       label="Edit"
//                       type="primary"
//                     />
//                     <Button
//                       onClick={() => handleDelete(index)}
//                       label="Delete"
//                       type="danger"
//                     />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Task;

//   return (
//     <div>
//       <Hero>
//         <h1>Welcome to Your Task List!</h1>
//       </Hero>
//       <Container>
//         <Row>
//           <Col size="md-6">
//             <h2>Add/Edit Task:</h2>
//             <div className="form-group">
//               <label htmlFor="taskInput">Task:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="taskInput"
//                 value={task}
//                 onChange={(e) => setTask(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="taskDescriptionInput">Task Description:</label>
//               <textarea
//                 className="form-control"
//                 id="taskDescriptionInput"
//                 rows="3"
//                 value={taskDescription}
//                 onChange={(e) => setTaskDescription(e.target.value)}
//               ></textarea>
//             </div>
//             <button className="btn btn-primary"
//             style={{
//             backgroundColor: 'blueviolet',
//             textAlign: 'center',
//             marginTop: "10px",
//             }}
//             onClick={handleSave}>
//               {editIndex !== null ? "Update" : "Save"}
//             </button>
//           </Col>
//           <Col size="md-6">
//             <h2>Task List:</h2>
//             <ul className="list-group">
//               {taskList.map((taskItem, index) => (
//                 <li
//                   key={index}
//                   className="list-group-item d-flex justify-content-between align-items-center"
//                   style={{marginTop:"25px"}}
//                 >
//                   <div>
//                     <strong>{taskItem.task}</strong> - {taskItem.taskDescription}
//                   </div>
//                   <div>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleEdit(index)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger ml-2"
//                       style={{
//                         backgroundColor: 'blueviolet',
//                         textAlign: 'center',
//                         margintop: "10px",
//                       }}
//                       onClick={() => handleDelete(index)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Task;



// import React from 'react';
// import Hero from '../components/Hero';
// import Container from '../components/Container';
// import Row from '../components/Row';
// import Col from '../components/Col';

// function Tasks() {
//     return (
//       <div>
//         <Hero>
//             <h1>Welcome to Your personal Task Planner!
//             </h1>
//         </Hero>
//         <Row>
//           <Col size="md-12">
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//               aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
//               varius natoque penatibus et magnis dis parturient montes, nascetur
//               ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
//               at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
//               nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec
//               sagittis mi sollicitudin turpis semper, et interdum risus
//               lobortis. Vestibulum suscipit nunc non egestas tristique. Proin
//               hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
//               quam non, tristique tempor erat. Nullam non sem facilisis, tempus
//               tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus
//               mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
//               cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
//               tincidunt non. Duis consequat mattis tortor vitae mattis.
//             </p>
//             </Col>
//         </Row>
//     </div>
// );
// }

// export default Tasks;