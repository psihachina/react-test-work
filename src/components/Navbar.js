import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <div className="bg-secondary">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <div className="nav-brand">Avatar</div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/Terminals"
                        exact
                    >
                        Терминалы
                </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/Buyers"
                    >
                        Покупатели
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
)