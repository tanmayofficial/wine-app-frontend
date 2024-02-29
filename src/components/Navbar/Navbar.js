import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMasterFileDropdownOpen, setIsMasterFileDropdownOpen] = useState(false);
  const [isdataEntryDropdownOpen, setIsdataEntryDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleMasterFileDropdown = () => {
    setIsMasterFileDropdownOpen(prevState => !prevState);
  };

  const toggleDataEntryDropdown = () => {
    setIsdataEntryDropdownOpen(prevState => !prevState);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="hamburger-icon" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      <ul className={`navbar-links ${isSidebarOpen ? 'active' : ''}`}>
        <li className="nav-item nav-title">
          <Link to="/" className="nav-link">TDR SOFTWARES</Link>
        </li>
        <li className="nav-item dropdown">
          <span className="dropdown-toggle nav-link" onClick={toggleMasterFileDropdown}>
            Master File <i className="fas fa-caret-down"></i>
          </span>
          <div className={`dropdown-content ${isMasterFileDropdownOpen ? 'open' : ''}`}>
            <Link to="/customer-register">Customer Register</Link>
            <Link to="/suppliers-register">Suppliers Register</Link>
            <Link to="/lpl-setup">LPL Setup</Link>
            <Link to="/stock-register">Stock Register</Link>
            <Link to="/item-category-register">Item Category Register</Link>
            <Link to="/item-discount-register">Item Discount Register</Link>
            <Link to="/dealer-category-discount-register">Dealer Category Discount Register</Link>
            <Link to="/minimum-stock-register">Minimum Stock Register</Link>
            <Link to="/scheme-register">Scheme Register</Link>
            <Link to="/ledger-creation">Ledger Creation</Link>
            <Link to="/store-info">Store Info</Link>
            <Link to="/licensee-info">Licensee Info</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <span className="dropdown-toggle nav-link" onClick={toggleDataEntryDropdown}>
            Data Entry <i className="fas fa-caret-down"></i>
          </span>
          <div className={`dropdown-content ${isdataEntryDropdownOpen ? 'open' : ''}`}>
            <Link to="/sale-bill">Sale Bill</Link>
            <Link to="/purchase-entry">Purchase Entry</Link>
            <Link to="/stock-transfer">Stock Transfer</Link>
            <Link to="/party-payment">Party Payment</Link>
            <Link to="/general-payment">General Payment</Link>
            <Link to="/customer-receipt">Customer Receipt</Link>
            <Link to="/general-receipt">General Receipt</Link>
            <Link to="/cash-deposit">Cash Deposit to Bank</Link>
            <Link to="/cash-withdrawn">Cash Withdrawn from Bank</Link>
            <Link to="/journal-entry">Journal Entry</Link>
          </div>
        </li>

        <li className="nav-item">
          <Link to="/sale-report" className="nav-link">Sale Report</Link>
        </li>
        <li className="nav-item">
          <Link to="/purchase-report" className="nav-link">Purchase Report</Link>
        </li>
        <li className="nav-item">
          <Link to="/inventory-report" className="nav-link">Inventory Report</Link>
        </li>
        <li className="nav-item">
          <Link to="/excise-report" className="nav-link">Excise Report</Link>
        </li>
        <li className="nav-item">
          <Link to="/audit-accounts" className="nav-link">Audit & Accounts</Link>
        </li>
        <li className="nav-item">
          <Link to="/utilities" className="nav-link">Utilities</Link>
        </li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
