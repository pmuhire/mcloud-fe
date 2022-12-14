import React from 'react';
import "./login.css";
import { WiCloud } from 'react-icons/wi';

const headerFontStyles = { color: '#0155aa', fontSize: '70px' };

const Login = () => {
    return (
        <div className='container'>
            <div className="login_form">
                <section className="header">
                    <div className="logo">
                        <h2>Welcome Back to </h2>
                        <WiCloud style={headerFontStyles} /><h2>MCloud</h2>
                    </div>
                </section>
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Your email' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' className='form-control' />
                    </div>
                    <div className="remember__me">
                        <div className="me">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <div className="forgot_password">
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                    <button type="submit">Login</button>
                    <p>Don't have account? <span><a href="#">Sign up</a></span></p>
                </form>
            </div>
        </div>
    )
}

export default Login
