import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import useAuth from '../../Hook/useAuth';
import Button from '@restart/ui/esm/Button';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <div className="navber">
                <div className="row">
                    <div className="col-md-5">
                        <div className="navber-image">
                            <img width="25%" src={logo} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="navber-items">
                            <ul className="d-flex align-items-end justify-space-evenly">
                                <Link to="/home" style={{ textDecoration: 'none' }}>
                                    <li className="items m-2 p-2">Home</li>
                                </Link>

                                <Link to="/products" style={{ textDecoration: 'none' }}>
                                    <li className="items m-2 p-2">Products</li>
                                </Link>

                                {
                                    user.email?
                                    <>
                                    <Link className="nav-element" to="/home" style={{ textDecoration: 'none' }}>
                                    <li onClick = {logout} className="items m-2 p-2">Logout</li>
                                    </Link>

                                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                                    <li className="items m-2 p-2">Dashboard</li>
                                    </Link>

                                    </>
                                    
                                    :
                                    <Link className="nav-element" to="/login" style={{ textDecoration: 'none' }}>
                                    <li className="items m-2 p-2">Login</li>
                                    </Link>
                                }

                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navigation;