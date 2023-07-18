import './App.css';
import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

//components
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import DataProvider from './context/DataProvider';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('token');
  console.log(isAuthenticated, token);
  return isAuthenticated && token || 1 ?
    <>
      <Outlet />
    </>
    :
    <Navigate replace to='/login' />
}
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/dashboard' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
