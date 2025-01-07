import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Coin from './Pages/Coins/Coin';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Profile from './Components/Profile/Profile';
import { SkeletonTheme } from 'react-loading-skeleton';
import './App.css';

function App() {
  return (
    <div className="AppMain">
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
      </SkeletonTheme>
      <ToastContainer />
    </div>
  );
}

export default App;
