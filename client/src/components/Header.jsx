import React from 'react'
import '../style/Header.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">

            <div className="header__info">
                <img 
                className="header__logo"
                src="https://media-eu.camilyo.software/media-eu/static/1520/189.png" 
                alt="Nukushare Agro" 
                title="Nukushare Agro"/>
                <div className="header__email">
                    <Link className='nav-link text-secondary bold' to='info@nukushareagro.com'>info@nukushareagro.com</Link>
                </div>

                <div className="header__phoneNumber">
                    <Link className='nav-link text-secondary bold' to='+233 24 152 8764'>+233 24 152 8764</Link>
                </div>
            </div>

            <div className="header__nav">
                <div className="navbar-collapse">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <Link class="nav-link text-white active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="#">Our Impacts</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="#">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" href="#">Impacts</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="#">Our partners</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="#" tabindex="-1" aria-disabled="true">Our Team</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link text-white" to="#">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
           

        </div>
    )
}

export default Header
