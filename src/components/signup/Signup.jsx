import React from 'react';
import "./signup.css";
import { WiCloud } from 'react-icons/wi';

const headerFontStyles = { color: '#0155aa', fontSize: '70px' };

const Signup = () => {
    return (
        <div className='container'>
            <div className="login_form">
                <section className="header">
                    <div className="logo">
                        <h2>Register to </h2>
                        <WiCloud style={headerFontStyles} /><h2>MCloud</h2>
                    </div>
                </section>
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="">Names</label>
                        <input type="text" placeholder='Your Names' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Your email' className='form-control' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' className='form-control' />
                    </div>
                    <button type="submit">Register</button>
                    <p>Have account? <span><a href="#">Sign in</a></span></p>
                </form>
            </div>
        </div>
    )
}

export default Signup
