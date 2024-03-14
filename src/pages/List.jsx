import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function List() {
  const [store, setStore] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    // Load saved shopping list from local storage on component mount
    const savedShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
    if (savedShoppingList) {
      setShoppingList(savedShoppingList);
    }
  }, []);

  const handleSave = () => {
    // Add new shopping item to the list
    const newItem = {
      store: store,
      foodType: foodType,
      quantity: quantity,
      budget: budget,
    };
    
        // Save updated shopping list to local storage whenever it changes
        localStorage.setItem("shoppingList", JSON.stringify([...shoppingList, newItem]));
  setShoppingList([...shoppingList, newItem]);

    // Clear input fields after saving
    setStore("");
    setFoodType("");
    setQuantity("");
    setBudget("");
  };

  const handleDelete = (index) => {
    // Remove item from the list
    const updatedList = [...shoppingList];
    updatedList.splice(index, 1);
    setShoppingList(updatedList);
  };

  return (
    <div>
      <Hero>
        <h1>Welcome to Your personal Shopping List!</h1>
      </Hero>
      <Container>
        <Row>
          <Col size="md-12">
            <h2>Add Shopping Item:</h2>
            <div className="form-group">
              <label htmlFor="storeInput">Store:</label>
              <input
                type="text"
                className="form-control"
                id="storeInput"
                value={store}
                onChange={(e) => setStore(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="foodTypeInput">Type of Food/Item of Clothing:</label>
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
              <label htmlFor="budgetInput">Budget:</label>
              <input
                type="text"
                className="form-control"
                id="budgetInput"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h2>Shopping List:</h2>
            <ul className="list-group">
              {shoppingList.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.store}</strong> - {item.foodType}, Quantity:{" "}
                    {item.quantity}, Budget: {item.budget}
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
