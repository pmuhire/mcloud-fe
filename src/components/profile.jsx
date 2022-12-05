import React from 'react';
import { BiBell } from 'react-icons/bi';
// import profile from '../../public/profile.jpg';
import './style.css';

const headerFontStyles = { color: '#130f0fd2', fontSize: '40px' };
function Profile() {
    return (
        <div className='profile'>
            <div className="profileimg">
                <img src={process.env.PUBLIC_URL+"/profile.jpg"} alt="profile" />
                <div className="welcome">
                    <p>Welcome back</p>
                    <h4>Muhire Patrick</h4>
                </div>
            </div>
            <div className="notification">
                <BiBell style={headerFontStyles}></BiBell>
                <div className="ball">
                    <p>3</p>
                </div>
            </div>
        </div>
    )
}

export default Profile
