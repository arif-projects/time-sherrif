import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, logInUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        // console.log(feild, value);
        //important ase..but hard
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        console.log(loginData);
        logInUser(loginData.email, loginData.password, location, history);


    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className = "container">
              <div className = "login mt-5">
              <h2>Login Here</h2>
              <div className="form-container ">
                                    <form onSubmit={handleLoginSubmit}>
                                        <input
                                        className="input-field mt-3"
                                        type="email"
                                        name="email"
                                        onChange={handleOnChange} 
                                        placeholder="Your Email"
                                        id="" required />
                                        <br />

                                        <input
                                        className="input-field mt-3"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleOnChange}
                                        required />
                                        <br />

                                        <p></p>
                                        <input className="BuyButton mt-3" type="submit" value="Login" />

                                        <Link to="/register">
                                            <li>New here? Register</li>
                                        </Link>
                                    </form>
                                    <button onClick={handleGoogleSignIn} className="me-2 signin-button" >
                                        Login with Google
                                    </button>
                                    
                                </div>
              </div>
            </div>
        </div>
    );
};

export default Login;