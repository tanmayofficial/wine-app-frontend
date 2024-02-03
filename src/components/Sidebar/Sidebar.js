import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-column">
        <div className="sidebar-item">Daily Status</div><hr />
        <div className="sidebar-item">Stock Register</div><hr />
        <div className="sidebar-item">Previous Year DSR</div><hr />
        <div className="sidebar-item">Fl, Beer & Cs Ledger Summary</div><hr />
        <div className="sidebar-item">Fl, Beer & Cs Ledger</div><hr />
        <div className="sidebar-item">Category/brand Stock</div><hr />
        <div className="sidebar-item">Item/batch/mrp Stock Report</div><hr />
        <div className="sidebar-item">Category Sale Status</div><hr />
        <div className="sidebar-item">Category DSR</div><hr />
        <div className="sidebar-item">Cate/Brand/Size Sale</div><hr />
        <div className="sidebar-item">Order On Daily Sale</div><hr />
        <div className="sidebar-item">Stock Status</div><hr />
        <div className="sidebar-item">Dsr With Op St</div><hr />
        <div className="sidebar-item">Dsr Brand Stock</div><hr />
        <div className="sidebar-item">Category Pack Ledger</div><hr />
        <div className="sidebar-item">Gtin Stock</div><hr />
      </div>
    </div>
  );
}

export default Sidebar;
