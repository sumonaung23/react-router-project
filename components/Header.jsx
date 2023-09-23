import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? 'nav-link' : null}
                    >Host</NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? 'nav-link' : null}
                    >About</NavLink>
                <NavLink 
                    to="/vans"
                    className={({isActive}) => isActive ? 'nav-link' : null}
                    >Vans</NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src="/assets/images/avatar-icon.png" 
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Header