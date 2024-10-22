import React from "react";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"

import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 shadow-sm" style={{ backgroundColor: '#f8f9fa', padding: '0.5rem 1rem' }}>
            <NavLink className="navbar-brand" to="/">
                <img
                    className="navbar-logo"
                    src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
                    alt="Brand Logo"
                    style={{ width: '100px', height: 'auto' }}
                />
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ border: 'none' }}
            >
                <span
                    className="navbar-toggler-icon"
                    style={{ backgroundImage: 'url(data:image/svg+xml;charset=utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path d="M0 3a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1zm1 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1z"/></svg>)' }}
                ></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create" style={{ color: '#343a40', padding: '0.5rem 1rem', transition: 'color 0.3s' }}>
                            Create Record
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" style={{ color: '#343a40', padding: '0.5rem 1rem', transition: 'color 0.3s' }}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services" style={{ color: '#343a40', padding: '0.5rem 1rem', transition: 'color 0.3s' }}>
                            Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact" style={{ color: '#343a40', padding: '0.5rem 1rem', transition: 'color 0.3s' }}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}