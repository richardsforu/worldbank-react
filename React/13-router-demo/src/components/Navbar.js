import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className="nav flex-column">
                <li className="nav-item">
                  
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                   
                    <Link className="nav-link" to="/add">Add Employee</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/list">List All</Link>
                </li>
              
            </ul>
        </div>
    );
};

export default Navbar;