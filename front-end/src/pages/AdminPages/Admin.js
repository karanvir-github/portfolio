import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function Private(loggedIn) {
    loggedIn = 1
    if (loggedIn === 1) {
        return <Outlet />
    } else {
        alert('Please login first');
        return <Navigate to={"/adminLogin"} />
    }
}


export default Private