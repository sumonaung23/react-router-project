import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
    const { currentVan } = useOutletContext()
    return (
        <section>
            <h4>Name: {currentVan.name}</h4>
            <p>{currentVan.description}</p>
        </section>
    )
}

export default HostVanInfo