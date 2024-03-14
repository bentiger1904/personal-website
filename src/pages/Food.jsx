import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function List() {
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

  const handleSave = () => {
    // Add new food item to the list
    const newItem = {
      meal: meal,
      foodType: foodType,
      quantity: quantity,
      calories: calories,
    };
    
        // Save updated food list to local storage whenever it changes
        localStorage.setItem("foodList", JSON.stringify([...foodList, newItem]));
  setFoodList([...foodList, newItem]);

    // Clear input fields after saving
    setMealTime("");
    setFoodType("");
    setQuantity("");
    setCalories("");
  };

  const handleDelete = (index) => {
    // Remove item from the list
    const updatedList = [...foodList];
    updatedList.splice(index, 1);
    setFoodList(updatedList);
  };

  return (
    <div>
      <Hero>
        <h1>Welcome to Your Food Log!</h1>
      </Hero>
      <Container>
        <Row>
          <Col size="md-12">
            <h2>Add Food Item:</h2>
            <div className="form-group">
              <label htmlFor="mealInput">Mealtime (Breakfast, Lunch, Snack etc):</label>
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
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h2>Food Record:</h2>
            <ul className="list-group">
              {foodList.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.meal}</strong> - {item.foodType}, Quantity:{" "}
                    {item.quantity}, calories: {item.calories}
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
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