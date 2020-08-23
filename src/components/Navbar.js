import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [img] = useState(localStorage.getItem('auth'))

    return (
        <nav class="navbar navbar-light navbar-expand-sm bg-light justify-content-md-center justify-content-start">
            <ul class="navbar-nav mx-auto text-center text-left">
                <li className="nav-item order-3 order-sm-0">
                    <NavLink
                        className="nav-link"
                        to="/Buyers"
                    >
                        Покупатели
                        </NavLink>
                </li>
                <li class="nav-item my-auto">
                    <a class="nav-link navbar-brand mx-0 d-none d-inline" onClick={(e) => { localStorage.removeItem("auth") }} href="/"><img alt="avatar" src={img} width="40" height="40" /></a>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/Terminals"
                        exact
                    >
                        Терминалы
                        </NavLink>
                </li>
            </ul>
        </nav>
    )
}