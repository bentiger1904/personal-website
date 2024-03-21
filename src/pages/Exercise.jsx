import React from "react";
import { useState, useEffect } from "react";
import { FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "../index.css";
import "animate.css";
import background from "../assets/exerciseBackground.jpeg";

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
            style={{ width: "60px" }}
            type="number"
            value={data.duration}
            onChange={(e) => {
              const newDuration = e.target.value;
              updateEntry(index, { ...data, duration: newDuration });
            }}
          />
          <span> minutes</span>
        </td>
        <td>
          <input
            style={{ width: "60px" }}
            type="number"
            value={data.distance}
            onChange={(e) => {
              const newDistance = e.target.value;
              updateEntry(index, { ...data, distance: newDistance });
            }}
          />
          <span> miles</span>
        </td>
        <td>
          <button
            type="button"
            className="delete-button"
            onClick={() => deleteEntry(index)}
          >
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    );
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
        <h1 className="animate__animated animate__backInRight">
          Welcome to Your personal Exercise Tracker!
        </h1>
      </Hero>
      <Container>
        <Row>
          <Col size="md-12">
            <table className="table table-danger flex" >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Workout</th>
                  <th>Duration</th>
                  <th>Distance</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="table-warning">
                {entries.map((entry, index) => addRow(entry, index))}
              </tbody>
              <tbody >
                <tr className="table-primary" >
                  <td colSpan="12">
                    <span
                      className="addEntry-button"
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
                          distance: 2,
                        });
                      }}
                    >
                      Add Entry <FaPlusCircle className="mb-1" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WorkoutTrackerApp;
