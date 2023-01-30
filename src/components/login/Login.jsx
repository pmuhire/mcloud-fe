import React, { useEffect, useState, useRef} from 'react';
import { Navigate } from 'react-router-dom';
import "./login.css";
import { WiCloud } from 'react-icons/wi';
import { Link } from 'react-router-dom';
import axios from '../../apis/axios';
const LOGIN_URL = '/login';

const headerFontStyles = { color: '#0155aa', fontSize: '70px' };

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user,setUser] =useState("");
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState("");
    
    useEffect(() => {
        setErrMsg("");
    }, [email, password]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        };
        try{ 
            const response=await axios.post(
                LOGIN_URL,
                JSON.stringify(userData),
                {
                    headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
                }
            );
            const accessToken = response.data.token;
            localStorage.setItem("auth",JSON.stringify(response.data));
			setAuth({ user, accessToken });
			setUser(response.data.user);
			setSuccess(true);
        }
        catch(err){
            if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err.response?.status === 404) {
				setErrMsg('Enter correct Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
        }
    };
    return (
        <>
        {JSON.parse(localStorage.getItem("auth")) ? (
          <Navigate to="/dashboard" />
      ) : (
        <div className='container'>
            <div className="login_form">
                <section className="header">
                    <div className="logo">
                        <h2>Welcome Back to </h2>
                        <WiCloud style={headerFontStyles} /><h2>Cloud 3</h2>
                    </div>
                </section>
                <form onSubmit={handleSubmit}>
                    <p
                        ref={errRef}
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errMsg}
                    </p>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Your email'
                            value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password'
                            value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
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
                    <p>Don't have account? <span><Link to={"/signup"}>Sign up</Link></span></p>
                </form>
            </div>
        </div>
      )}
      </>
        
    )
}

export default Login
