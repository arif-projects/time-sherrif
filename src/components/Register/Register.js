import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Register.css'
import useAuth from '../Hook/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { registerUser } = useAuth();


    const handleOnBlur = e => {
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
        if (loginData.password !== loginData.password2) {
            alert('password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
    }
    return (
        <div>
                    <div className="login-form">
                    <div className="container regiser mb-5">
                        <h2 className="text-danger mb-5">Register Here.</h2>
                        
                           
                                <div className="form-container ">
                                    <form onSubmit={handleLoginSubmit}>

                                        <input 
                                        className="input-field mt-3"
                                        type = "text" 
                                        name="name"
                                        onBlur={handleOnBlur}
                                        placeholder="Your Name"
                                        required />
                                        <br/>

                                        <input
                                        className="input-field mt-3"
                                        placeholder="Your Email"
                                        name="email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                        required />
                                        <br/>
                                    
            
                                        <input
                                        className="input-field mt-3"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        required />
                                        <br />

                                        <input
                                        className="input-field mt-3"
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        required />
                                        <br />
                                        <p></p>
                                        <input className="BuyButton mt-3" type="submit" value="Register" />
                                        <Link to="/login">
                                            <li>already registerd? Login.</li>
                                        </Link>
                                    </form>
                                </div>
                            
                        
                    </div>

                </div>
        </div>
    );
};

export default Register;