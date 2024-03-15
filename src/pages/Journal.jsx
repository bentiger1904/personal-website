import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
//import Container from "../components/Container";
//import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import EntryForm from "../components/Entry/EntryForm";
import EntryList from "../components/Entry/EntryList";
import "../index.css";

function Journal() {
  const localStorageKey = "journalEntries";

  // Retrieve entries from local storage on component mount
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem(localStorageKey);
    return storedEntries ? JSON.parse(storedEntries) : [];
  });

  // State for tracking the index of the entry being edited
  const [editIndex, setEditIndex] = useState(null);

  // Update local storage whenever entries state changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((entry, i) => i !== index);
    setEntries(updatedEntries);
  };

  const editEntry = (index, updatedEntry) => {
    const updatedEntries = [...entries];
    updatedEntries[index] = updatedEntry;
    setEntries(updatedEntries);
    setEditIndex(null); // Reset editIndex after editing
  };

  return (
    <Wrapper>
      <Hero>
        <h1>Welcome to Your personal Journal</h1>
      </Hero>
      <div className="content">
        <Row>
          <Col size="md-6">
            <div className="entry-form">
              <EntryForm
                onSubmit={addEntry}
                entryToEdit={editIndex !== null ? entries[editIndex] : null} // Pass the entry to edit based on editIndex
              />
            </div>
          </Col>
          <Col size="md-6">
            <div className="entry-list">
              <EntryList
                entries={entries}
                onDelete={deleteEntry}
                onEdit={(index) => setEditIndex(index)} // Set the index of the entry being edited
              />
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default Journal;