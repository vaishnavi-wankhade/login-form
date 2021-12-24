import React from 'react';
import {Link , Navlink} from "react-router-dom";
import './Menustyle.css';

export default function Navbar() {
    return (
        <div className="Menustyle">
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/form">Fill Form</Link></li>
                
            </ul>
        </nav>

        
        </div>
    )
}
