import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './components/Google';

//components
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
