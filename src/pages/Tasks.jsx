import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

import Card from 'react-bootstrap/Card';

function HeaderTask({ task, setTask, handleChange, handleSubmit }) {
  return (
    <Card style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Card.Header>Task organiser:</Card.Header>
      <Card.Body>
        <Card.Title>Write your Task here!</Card.Title>
        <Card.Text>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              style={{ borderRadius: '3px', border: '1px solid #ccc', padding: '8px 12px', width: '100%' }}
              placeholder="Enter task..."
              value={task}
              onChange={handleChange}
            />
            <button type="submit" style={{ marginLeft: '10px' }} className="btn btn-primary" onClick={handleSubmit}>
              Add Task
            </button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


// function HeaderTask({ task, setTask, handleChange, handleSubmit }) {
//   return (
//     <Card>
//       <Card.Header>Task organiser:</Card.Header>
//       <Card.Body>
//         <Card.Title>Write your Task here!</Card.Title>
//         <Card.Text>
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter task..."
//               value={task}
//               onChange={handleChange}
//             />
//             <div className="input-group-append">
//               <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
//                 Add Task
//               </button>
//             </div>
//           </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// Define the Tasks component
function Tasks() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    console.log('Fetching tasks from local storage');
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      console.log('Tasks retrieved:', storedTasks);
      setTasksList(storedTasks);
    }
  }, []);
  
  useEffect(() => {
    console.log('Saving tasks to local storage');
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  }, [tasksList]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  return (
    <div>
      <Hero>
        <h1 className="text-center text-white">Welcome to Your personal Task Planner!</h1>
      </Hero>
      <Container>
        <Row>
          <Col size="md-6">
            <HeaderTask
              task={task} 
              setTask={setTask} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit} 
            />
          </Col>
          <Col size="md-6">
            <Card >
              <div className="card-body">
                <h2 className="card-title text-center">Tasks:</h2>
                <ul className="list-group">
                  {tasksList.map((task, index) => (
                    <li key={index} className="list-group-item">{task}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tasks;



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