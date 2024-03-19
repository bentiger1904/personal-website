// import { useState } from 'react'
import './App.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Journal from './pages/Journal';
import Exercise from "./pages/Exercise"
import Tasks from './pages/Tasks';
import List from "./pages/List"
import Food from "./pages/Food"
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Journal/>} />
            <Route path="/tasks" element={<Tasks/>} />
            <Route path="/list" element={<List/>} />
            <Route path="/exercise" element={<Exercise/>} />
            <Route path="/food" element={<Food/>} />
            <Route path="/*" element={<PageNotFound/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
