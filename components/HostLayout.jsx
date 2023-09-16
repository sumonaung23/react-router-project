import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'

const HostLayout = () => {
    const activeNav = {
        'font-weight': 'bold',
        'text-decoration': 'underline',
        'color': '#161616'
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink 
                    to="/host" className={activeNav}
                    end
                    style={({isActive}) => isActive ? activeNav : null}>                 
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/host/income"
                    style={({isActive}) => isActive ? activeNav : null}>
                    Income
                </NavLink>
                <NavLink 
                    to="/host/reviews"
                    style={({isActive}) => isActive ? activeNav : null}>
                        Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout