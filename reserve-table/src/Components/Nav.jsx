import React from 'react';
// import Reservations from './Nav/Reservations';
// import OrderOnLine from './Nav/OrderOnLine';
// import Login from './Nav/Login';
// import Home from './Nav/Home';
// import About from './Nav/About';
// import Menu from './Nav/Menu';
// import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

function Nav () {

    return(
            <nav>
                <ul>
                    <li>
                        <a href="/" className="nav-item">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="nav-item">About</a>
                    </li>
                    <li>
                        <a href="/menu" className="nav-item">Menu</a>
                    </li>
                    <li>
                        <a href="/reservations" className="nav-item">Reservations</a>
                    </li>
                    <li>
                        <a href="/orderOnline" className="nav-item">Order Online</a>
                    </li>
                    <li>
                        <a href="/login" className="nav-item">Login</a>
                    </li>
                </ul>
            </nav>
        // <Router>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/" className="nav-item">Home</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about" className="nav-item">About</Link>
        //             </li>
        //             <li>
        //                 <Link to="/menu" className="nav-item">Menu</Link>
        //             </li>
        //             <li>
        //                 <Link to="/reservations" className="nav-item">Reservations</Link>
        //             </li>
        //             <li>
        //                 <Link to="/orderOnline" className="nav-item">Order Online</Link>
        //             </li>
        //             <li>
        //                 <Link to="/login" className="nav-item">Login</Link>
        //             </li>
        //         </ul>
        //     </nav>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/about" element={<About />} />
        //         <Route path="/menu" element={<Menu />} />
        //         <Route path="/reservations" element={<Reservations />} />
        //         <Route path="/orderOnline" element={<OrderOnLine />} />
        //         <Route path="/login" element={<Login />} />
        //     </Routes>
        // </Router>    
    )
}

export default Nav