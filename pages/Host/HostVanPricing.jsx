import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
    const { currentVan } = useOutletContext();
    return (
        <>
                <h4 className="host-van-detail-info-text">${currentVan.price}/day</h4>
        </>
    )
}

export default HostVanPricing