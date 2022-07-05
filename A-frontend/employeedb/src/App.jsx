import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Register from './components/Register'

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route>
                      <Route path="/" element={<Home />} />
                      <Route path="/register" element={<Register />} />
                   </Route>
              </Routes>
          </Router>
        </div>
  );
}

export default App;
