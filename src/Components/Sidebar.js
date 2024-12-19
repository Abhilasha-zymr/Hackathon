import React from 'react';
import "./Sidebar.css";
import logo from "../Assets/Lineage.png"
export default function Sidebar({ onNavigate }) {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'></div>
      <img src={logo} alt="Logo" className="logo" />
      <hr style={{ height: "2px",width: "100%", backgroundColor: "offwhite", border: "none" }} />


      <div className="sidebar-logo">
      <h1 style={{ cursor: "pointer" }} onClick={() => onNavigate("Movie")}>
      Movie Booking
      </h1><hr></hr>
        <h1>Order</h1><hr></hr>
        <h1>Non compliance</h1><hr></hr>
      
      </div>
      
    </div>
  );
}
