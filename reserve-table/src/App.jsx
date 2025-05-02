import './App.css'
import React from 'react'
import OrderOnLine from './Components/Nav/OrderOnLine'
import About from './Components/Nav/About'
import Reservations from './Components/Reservations'
import Login from './Components/Nav/Login'
import Menu from './Components/Nav/Menu'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
    
    <Router>
            <div className="header">
              <Header />
              <nav>
                <ul>
                  <li><Link to="/" className="nav-item">Home</Link></li>
                  <li><Link to="/about" className="nav-item">About</Link></li>
                  <li><Link to="/menu" className="nav-item">Menu</Link></li>
                  <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                  <li><Link to="/orderOnline" className="nav-item">Order Online</Link></li>
                  <li><Link to="/login" className="nav-item">Login</Link></li>
                </ul>
              </nav>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/orderOnline" element={<OrderOnLine />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
    </Router>    
    <Footer />
    </>
  )
}

export default App
