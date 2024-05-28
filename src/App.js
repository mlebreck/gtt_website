import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Homepage from './Homepage';
import Staff from './Staff';

const App = () => {
  return (
    <Router basename="/gtt_website">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;
