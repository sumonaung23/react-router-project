import React from "react"
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vans, setVans] = React.useState([])

    const typeFilter = searchParams.get("type");

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter 
        ? vans.filter(van => van.type = typeFilter)
        : vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    ) 
}