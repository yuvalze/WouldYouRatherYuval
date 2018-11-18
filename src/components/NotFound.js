import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound() {
    return(
        <div>
            <h1>This page can’t be reached....</h1>
            <Link to="/" className='linkLogIn'>Please press here to login again</Link>
        </div>
    )
}