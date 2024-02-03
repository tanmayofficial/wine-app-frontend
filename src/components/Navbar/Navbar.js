import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
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
          <span className="dropdown-toggle nav-link" onClick={toggleDropdown}>
            Master File <i className="fas fa-caret-down"></i>
          </span>
          <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
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
        <li className="nav-item">
          <Link to="/data-entry" className="nav-link">Data Entry</Link>
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
