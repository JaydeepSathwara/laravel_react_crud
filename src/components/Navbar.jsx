import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand navbar-dark bg-dark'>
                <div className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to={"/"} className="nav-link">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/create_record"} className="nav-link">Create</Link>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar