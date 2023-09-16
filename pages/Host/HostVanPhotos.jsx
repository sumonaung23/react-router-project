import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
    const { currentVan } = useOutletContext();

    return (
        <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
        </div>
    )
}

export default HostVanPhotos