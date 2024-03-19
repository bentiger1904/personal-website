import React, { useState } from "react";
import Hero from "../components/Hero";
//import Container from "../components/Container";
//import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Col from "../components/Col";
//import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import EntryForm from "../components/Entry/EntryForm";
import EntryList from "../components/Entry/EntryList";
import "../index.css";
import 'animate.css';

function Journal() {
  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addEntry = (newEntry) => {
    if (editIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = newEntry;
      setEntries(updatedEntries);
      setEditIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = entries.filter((entry, i) => i !== index);
    setEntries(updatedEntries);
  };

  const editEntry = (index) => {
    setEditIndex(index);
  };

  return (
    <Wrapper>
      <Hero>
        <h1 class="animate__animated animate__rubberBand">Welcome to Your personal Journal</h1>
      </Hero>
      <div className="content">
        <Row>
          <Col size="md-6">
            <div className="entry-form">
              <EntryForm
                onSubmit={addEntry}
                entryToEdit={entries[editIndex]}/>
            </div>
          </Col>
          <Col size="md-6">
            <div className="entry-list">
              <EntryList
                entries={entries}
                onDelete={deleteEntry}
                onEdit={editEntry}/>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default Journal;
