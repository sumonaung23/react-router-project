import React, { useEffect, useState } from 'react'
import { Link, NavLink , useParams, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';

export function loader({ params }) {
    return getHostVans(params.id)
}

const HostVanDetail = () => {
    const {id} = useParams();
    //const [currentVan, setCurrentVan] = useState(null);
    const currentVan = useLoaderData();

    const activeNav = {
        'font-weight': 'bold',
        'text-decoration': 'underline',
        'color': '#161616'
    }

    return (
        <section>
            <Link 
                to=".."
                relative='path'
                className='back-button'
                >&larr; <span>Back to all vans</span>
            </Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className='host-van-detail-nav'>
                    <NavLink
                        to='.'
                        style={({isActive}) => isActive ? activeNav : null}>
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({isActive}) => isActive ? activeNav : null}>
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({isActive}) => isActive ? activeNav : null}>
                        Photos
                    </NavLink>
                </nav>

                <Outlet context={{currentVan}} />
            </div>
        </section>
    )
}

export default HostVanDetail