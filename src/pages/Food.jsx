import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import background from "../assets/shoppingListBackground.jpeg";
import "animate.css";

function List() {
  const [day, setDay] = useState("");
  const [meal, setMealTime] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calories, setCalories] = useState("");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    // Load saved food list from local storage on component mount
    const savedFoodList = JSON.parse(localStorage.getItem("foodList"));
    if (savedFoodList) {
      setFoodList(savedFoodList);
    }
  }, []);

  const saveToLocalStorage = (list) => {
    localStorage.setItem("foodList", JSON.stringify(list));
  };

  const handleSave = () => {
    // Add new food item to the list
    const newItem = {
      day: day,
      meal: meal,
      foodType: foodType,
      quantity: quantity,
      calories: calories,
    };

    // Save updated food list to local storage whenever it changes
    // localStorage.setItem("foodList", JSON.stringify([...foodList, newItem]));
    // setFoodList([...foodList, newItem]);
    const updatedList = [...foodList, newItem];
    saveToLocalStorage(updatedList);
    setFoodList(updatedList);

    // Clear input fields after saving
    setDay("");
    setMealTime("");
    setFoodType("");
    setQuantity("");
    setCalories("");
  };

  const handleDelete = (index) => {
    // Remove item from the list
    const updatedList = [...foodList];
    updatedList.splice(index, 1);
    saveToLocalStorage(updatedList);
    setFoodList(updatedList);
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
        <h1 className="animate__animated animate__zoomIn">
          Welcome to Your Food Log!
        </h1>
      </Hero>
      <Container style={{ backgroundColor: "#f5d76e" }}>
        <Row>
          <Col size="md-12">
            <h2 style={{ textAlign: "center" }}>Add Food Item:</h2>
            <div className="form-group">
              <label htmlFor="dayInput">Day of Week:</label>
              <input
                type="text"
                className="form-control"
                id="dayInput"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mealInput">
                Mealtime (Breakfast, Lunch, Snack etc):
              </label>
              <input
                type="text"
                className="form-control"
                id="mealInput"
                value={meal}
                onChange={(e) => setMealTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="foodTypeInput">Type of Food:</label>
              <input
                type="text"
                className="form-control"
                id="foodTypeInput"
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantityInput">Quantity:</label>
              <input
                type="text"
                className="form-control"
                id="quantityInput"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="caloriesInput">Calories:</label>
              <input
                type="text"
                className="form-control"
                id="caloriesInput"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
              />
            </div>

            <span onClick={handleSave} className="addEntry-button">
              Add Entry <FaPlusCircle className="mb-1" />
            </span>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h2 className="mt-2" style={{ textAlign: "center" }}>
              Food Record:
            </h2>
            <ul className="list-group">
              {foodList.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>
                      <mark>{item.day}</mark>, {item.meal}
                    </strong>{" "}
                    - {item.foodType}, Quantity: {item.quantity}, calories:{" "}
                    {item.calories}
                  </div>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default List;
