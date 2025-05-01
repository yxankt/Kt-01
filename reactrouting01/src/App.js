import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Zero from "./pages/Zero";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Zero />} >
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
