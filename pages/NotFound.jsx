import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notFound'>
            <h1>Sorry the page you were looking for was not found.</h1>
            <Link to="/" className="link">Return to home</Link>
        </div>
            
    )
}

export default NotFound