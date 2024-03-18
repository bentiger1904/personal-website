import React, { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import { Container } from 'react-bootstrap';
import EntryForm from "../components/Entry/EntryForm";
import EntryList from "../components/Entry/EntryList";
import axios from 'axios';
import "../index.css";

function Journal() {
  const localStorageKey = "journalEntries";
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Retrieve entries from local storage
  const [entries, setEntries] = useState(() => {
    const storedEntries = localStorage.getItem(localStorageKey);
    return storedEntries ? JSON.parse(storedEntries) : [];
  });

  // track the entry being edited
  const [editIndex, setEditIndex] = useState(null);

  // Update local storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(entries));
  }, [entries]);

  // Fetch quote of the day from the API
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://favqs.com/api/qotd");
        setQuote(response.data.quote.body);
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError("Failed to fetch quote");
      }
    };

    fetchQuote();
  }, []);

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
    setEditIndex(null);
  };

  return (
    <Wrapper>
      <Hero>
        <h1>Welcome to Your personal Journal</h1>
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>{quote}</p>}
      </Hero>
      <div className="container">
        <div className="content">
          <Container>
            <Row>
              <Col size="md-8">
                <div className="entry-form">
                  <div className="entry-form-container">
                    <EntryForm
                      onSubmit={addEntry}
                      entryToEdit={
                        editIndex !== null ? entries[editIndex] : null
                      }
                    />
                  </div>
                </div>
              </Col>
              <Col size="md-12">
                <div className="entry-list">
                  <div className="entry-list-container">
                    <EntryList
                      entries={entries}
                      onDelete={deleteEntry}
                      onEdit={(index) => setEditIndex(index)}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
}

export default Journal;
