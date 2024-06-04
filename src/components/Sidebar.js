import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { CgProfile } from "react-icons/cg";
import {  MdHelpCenter ,MdPriceChange } from "react-icons/md";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoEar, IoNewspaperOutline } from "react-icons/io5";
const analyticsItems = [
  { path: '/dashboard', name: 'Dashboard', icon: <RxDashboard /> },
  { path: '/prices', name: 'Prices', icon: <MdPriceChange /> },
  { path: '/exchanges', name: 'Exchanges', icon: <BsCurrencyExchange /> },
  { path: '/news', name: 'News', icon: <IoNewspaperOutline  /> },
];

const settingsItems = [
  { path: '/profile', name: 'Profile', icon: <CgProfile /> },
  { path: '/preferences', name: 'Preferences', icon: <IoMdSettings /> },
  { path: '/help', name: 'Help', icon: <MdHelpCenter /> },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Crypto Dashboard</h2>
      <div className="sidebar-section">
        
      <h3>Analytics</h3>
        <ul>
          {analyticsItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={({ isActive }) => (isActive ? "active-link" : "")}>
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Settings</h3>
        <ul>
          {settingsItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={({ isActive }) => (isActive ? "active-link" : "")}>
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Sidebar;


