import React from 'react';
import { Link } from 'react-router-dom'
import '../../../App.css';

const Header = () => {
    return (
        <div id="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/*<li><a onClick={() => navigate("Home")} className="active" href="Home">Home</a></li>
                <li><a class="active" href="https://www.google.com">Services</a></li>
                <li><a class="active" href="https://www.google.com">Schedule</a></li>
                <li><a class="active" href="https://www.google.com">Contact</a></li>
                */}
            </ul>
        </div>
    )
}

export default Header;
