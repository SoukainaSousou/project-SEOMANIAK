import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/users">👤 Utilisateurs</Link></li>
      </ul>
    </div>
  );
}
