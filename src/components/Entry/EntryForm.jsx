import React, { useState, useEffect } from "react";
import "./index.css";

const EntryForm = ({ onSubmit, entryToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (entryToEdit) {
      setTitle(entryToEdit.title);
      setDescription(entryToEdit.description);
      setDate(entryToEdit.date);
    }
  }, [entryToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date });
    setTitle("");
    setDescription("");
    setDate("");
  };

  return (
    <div className="entry-form-container">
      <h2 className="entry-form-title">
        {entryToEdit ? "Edit Entry" : "Add New Entry"}
      </h2>
      <form className="entry-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            className="form-input"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-input"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            className="form-input"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button className="form-button" type="submit">
          {entryToEdit ? "Edit Entry" : "Add Entry"}
        </button>
      </form>
    </div>
  );
};

export default EntryForm;
