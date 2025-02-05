import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './components/Portfolio';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/all-projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
