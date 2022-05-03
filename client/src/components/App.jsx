import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Fighter from './Fighter';
import Compare from './Compare';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fighter" element={<Fighter />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
