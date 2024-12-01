import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../assets/logos.png";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

const Navigation = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
  };

  return (
    <header>
      <img
        src={logo}
        onClick={() => {
          navigate("/");
        }}
        alt=""
      />
      {sidebarOpen ? (
        <>
         
          <nav className="sidebar">
          <img
        className="close"
        src={close}
        alt=""
        srcset=""
        onClick={toggleSidebar}
      />
            <a
              onClick={() => {
                navigate("/findDoctor");
              }}
            >
              Find Doctors
            </a>
            <a>Hospitals</a>
            <a>Medicines</a>
            <a>Surgeries</a>
            <a>Software for Provider</a>
            <a>Facilities</a>
            <button
              onClick={() => {
                navigate("/myBookings");
              }}
            >
              My Bookings
            </button>
          </nav>
        </>
      ) : (
        <>
          <nav className="nav">
            <a
              onClick={() => {
                navigate("/findDoctor");
              }}
            >
              Find Doctors
            </a>
            <a>Hospitals</a>
            <a>Medicines</a>
            <a>Surgeries</a>
            <a>Software for Provider</a>
            <a>Facilities</a>
            <button
              onClick={() => {
                navigate("/myBookings");
              }}
            >
              My Bookings
            </button>
          </nav>
        </>
      )}

      <img
        className="menu"
        src={menu}
        alt=""
        srcset=""
        onClick={toggleSidebar}
      />
    </header>
  );
};

export default Navigation;