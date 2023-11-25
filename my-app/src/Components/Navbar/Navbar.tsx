import React from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css"
import ROUTES from '../../Route';

const Navbar: React.FC = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className='static' to={ROUTES.root}>
                    <p className="navbar-brand"  >Frequent Research</p>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className='static' to={ROUTES.root}>
                                <p className="nav-link">Add New</p>

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='static' to={ROUTES.users}>
                                <p className="nav-link">Listings</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar