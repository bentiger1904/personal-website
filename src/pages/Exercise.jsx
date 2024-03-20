
import React from "react";
import { useState, useEffect } from "react";
import { FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../index.css";
import 'animate.css';


function WorkoutTrackerApp() {
  function UseLocalStorage(key, initialValue) {
    // State to store our value
    const [value, setValue] = useState(() => {
      // Retrieve the value from local storage if it exists
      const storedValue = localStorage.getItem(key);
      // Parse and return stored JSON value, or return initialValue
      return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    // Update local storage whenever the value changes
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // Return the value and a function to update it
    return [value, setValue];
  }
  // Use the custom hook to manage the "workout-tracker-entries" data in local storage
  const [entries, setEntries] = UseLocalStorage("workout-tracker-entries", []);

  const addEntry = (data) => {
    setEntries([...entries, data]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const updateEntry = (index, newData) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = newData;
    setEntries(updatedEntries);
  };

  const addRow = (data, index) => {
    return (

      <tr key={index} className="tracker__row">
        <td>
          <input
            type="date"
            className="tracker__date"
            value={data.date}
            onChange={(e) => {
              const newDate = e.target.value;
              updateEntry(index, { ...data, date: newDate });
            }}
          />
        </td>
        <td>
          <select
            className="tracker__workout"
            value={data.workout}
            onChange={(e) => {
              const newWorkout = e.target.value;
              updateEntry(index, { ...data, workout: newWorkout });
            }}
          >
            <option value="walking">Walking</option>
            <option value="running">Running</option>
            <option value="outdoor-cycling">Outdoor Cycling</option>
            <option value="indoor-cycling">Indoor Cycling</option>
            <option value="swimming">Swimming</option>
            <option value="yoga">Yoga</option>
          </select>
        </td>
        <td>
          <input
            type="number"
            className="tracker__duration"
            value={data.duration}
            onChange={(e) => {
              const newDuration = e.target.value;
              updateEntry(index, { ...data, duration: newDuration });
            }}
          />
          <span > minutes</span>
        </td>
        <td>
          <button
            style={{backgroundColor: "#ff66ff"}}
            type="button"
            className="btn-danger"
            onClick={() => deleteEntry(index)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>

        <Hero>
            <h1 class="animate__animated animate__backInRight">Welcome to Your personal Exercise Tracker!
            </h1>
        </Hero>
    <Container>

        <Row>
          <Col size="md-12">
            <table className="table">
              <thead>
                <tr className="table-info">
                  <th>Date</th>
                  <th>Workout</th>
                  <th>Duration</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-warning">
                {entries.map((entry, index) => addRow(entry, index))}
              </tbody>
              <tbody>
                <tr className="table-primary">
                  <td colSpan="4">
                    <span 
                      style={{color: "green", cursor: "pointer"}}
                      onClick={() => {
                        const date = new Date();
                        const year = date.getFullYear();
                        const month = (date.getMonth() + 1)
                          .toString()
                          .padStart(2, "0");
                        const day = date.getDate().toString().padStart(2, "0");
                        addEntry({
                          date: `${year}-${month}-${day}`,
                          workout: "walking",
                          duration: 30,
                        });
                      }}
                    >
                      Add Entry <FaPlusCircle className="mb-1"/>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WorkoutTrackerApp;
