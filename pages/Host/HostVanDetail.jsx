import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const HostVanDetail = () => {
    const param = useParams();
    const [currentVan, setCurrentVan] = useState(null);

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans));
    }, [])
    return (
        <div>HostVanDetail</div>
    )
}

export default HostVanDetail