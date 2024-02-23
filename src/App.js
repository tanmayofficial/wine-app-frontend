import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./components/Home/Home";
import "./App.css";
import CustomerRegister from './components/CustomerRegister/CustomerRegister';
import DataEntry from './components/DataEntry/DataEntry';
import SaleReport from './components/SaleReport/SaleReport';
import PurchaseReport from './components/PurchaseReport/PurchaseReport';
import InventoryReport from './components/InventoryReport/InventoryReport';
import ExciseReport from './components/ExciseReport/ExciseReport';
import AuditAndAccounts from './components/AuditAndAccounts/AuditAndAccounts';
import Utilities from './components/Utilities/Utilities';
import DailyStatus from './components/DailyStatus.js/DailyStatus';

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
                <Route path="/customer-register" element={<CustomerRegister />} />
                <Route path="/data-entry" element={<DataEntry />} />
                <Route path="/sale-report" element={<SaleReport />} />
                <Route path="/purchase-report" element={<PurchaseReport />} />
                <Route path="/inventory-report" element={<InventoryReport />} />
                <Route path="/excise-report" element={<ExciseReport />} />
                <Route path="/audit-accounts" element={<AuditAndAccounts />} />
                <Route path="/utilities" element={<Utilities />} />

                {/* Sidebar items */}
                <Route path="/daily-status" element={<DailyStatus />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
