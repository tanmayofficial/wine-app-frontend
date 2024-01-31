import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.js';
import Home from './components/Navbar/Home/Home.js';
import Login from './components/Login/Login.js';
import MasterFile from './components/MasterFile/MasterFile.js';
import DataEntry from './components/DataEntry/DataEntry.js';
import SaleReport from './components/SaleReport/SaleReport.js';
import PurchaseReport from './components/PurchaseReport/PurchaseReport.js';
import InventoryReport from './components/InventoryReport/InventoryReport.js';
import ExciseReport from './components/ExciseReport/ExciseReport.js';
import AuditAndAccounts from './components/AuditAndAccounts/AuditAndAccounts.js';
import Contact from './components/Navbar/Contact/Contact.js';
import About from './components/Navbar/About/About.js';

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" exact element={Home} />
            <Route path='/contact' element={Contact} />
            <Route path="/about" element={About} />
            <Route path="/login" element={Login} />
            <Route path="/master-file" element={MasterFile} />
            <Route path="/data-entry" element={DataEntry} />
            <Route path="/sale-report" element={SaleReport} />
            <Route path="/purchase-report" element={PurchaseReport} />
            <Route path="/inventory-report" element={InventoryReport} />
            <Route path="/excise-report" element={ExciseReport} />
            <Route path="/audit-and-accounts" element={AuditAndAccounts} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
