import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img className='logo' src='/Images/logo.png' alt='logo' />
            </div>
            <div>
                <Link to="#"><h1>About Us</h1></Link>
            </div>
        </nav>
    )
}

export default Navbar