import React, { useState, useRef, useEffect } from 'react';
import "./signup.css";
import { WiCloud } from 'react-icons/wi';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../apis/axios';

const headerFontStyles = { color: '#0155aa', fontSize: '70px' };

const SIGNIN_URL = '/newUser';
const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profile_picture: ""
    });

    const {
        firstName,
        lastName,
        email,
        password
    } = formData;
    const [profile_picture, setProfilePicture] = useState([]);

    const [error, setError] = useState(false);
    const [err, setErr] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [errorMessages, setErrMsg] = useState("");
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        validateInput(e);
    };
    const validateInput = (e) => {
        let { name, value } = e.target;
        setErr((prevState) => {
            const stateObj = { ...prevState, [name]: "" };
            switch (name) {
                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter email which is not used.";
                    }
                    break;
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (formData.password < 8) {
                        stateObj["password"] = "Password must have atleast 8 characters.";
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    };
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none"
                }}>
                <h1>{errorMessages}</h1>
            </div>
        );
    };
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [profile_picture, setProfilePicture] = useState([]);
    // const [user, setUser] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""
        ) {
            setErrMsg("Please provide data for all fields");
            setError(true);
        }
        const userData = {
            email,
            password,
            firstName,
            lastName,
            profile_picture
        };
        console.log(userData);
        try {
            await axios.post(
                SIGNIN_URL,
                JSON.stringify(userData),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            );
            navigate("/login");
        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 404) {
                setErrMsg('Enter correct Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    };

    const profileHandler = (e) => {
        setProfilePicture("");
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.readyState === 2) {
                setProfilePicture(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div className='container'>
            <div className="login_form">
                <section className="header">
                    <div className="logo">
                        <h2>Register to </h2>
                        <WiCloud style={headerFontStyles} /><h2>MCloud</h2>
                    </div>
                </section>
                <form onSubmit={handleSubmit}>
                    <div className="messages">
                        {/* {successMessage()}
                        {errorMessage()}
                        {err.password}
                        {err.confirmPassword} */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Firstname</label>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={onChange}
                            value={firstName}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Lastname</label>
                        <input type="text" placeholder='Your Lastname' name='lastName' className='form-control'
                            value={lastName} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Your email' name='email' className='form-control'
                            value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' placeholder='Password' className='form-control'
                            value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="upload__profile">Profile picture</label>
                        <input type="file" id='upload__profile'
                            onChange={profileHandler} />
                    </div>
                    <button type="submit">Register</button>
                    <p>Have account? <span><Link to={"/login"}>Sign in</Link></span></p>
                </form>
            </div>
        </div>
    )
}

export default Signup
