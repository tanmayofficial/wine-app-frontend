import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./components/Home/Home";
import "./App.css";
import CustomerRegister from './components/CustomerRegister/CustomerRegister';

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Define other routes here */}
                <Route path="/customer-register" element={<CustomerRegister />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
