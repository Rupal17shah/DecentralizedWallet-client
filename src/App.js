import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './components/Google';

//components
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <><GoogleOAuthProvider clientId="593432034776-t6eebgjbnlgd9lpbgmf6dk82om02npvc.apps.googleusercontent.com">
      <Google />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>;
    </>
  );
}

export default App;
