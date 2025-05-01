// src/pages/Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <ul>
       <li><Link to="/" className="active">Home</Link> </li> 
       <li> <Link to="/Contact">Contact</Link> </li> 
       <li> <Link to="/Login">Login</Link></li> 
       <li> <Link to="/Register">Register</Link></li> 
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
