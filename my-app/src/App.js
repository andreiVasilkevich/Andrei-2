import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js';

import {
  BrowserRouter as Router,
  Routes,
  Route


} from "react-router-dom";

import { Home } from './Home'
import { Users } from './Users'
import { About } from './About'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
