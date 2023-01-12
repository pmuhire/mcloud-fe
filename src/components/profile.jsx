import React, { useEffect } from 'react';
import { BiBell } from 'react-icons/bi';
import './style.css';
import Notification from './notification/Notification';

const headerFontStyles = { color: '#130f0fd2', fontSize: '40px' };
function Profile() {
    const [isOpen, setOpen] = React.useState(false);
    const [user, setUser] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log(isOpen);
        setOpen(false);
        console.log(isOpen);
    };
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('auth'));
        if (user) {
            setUser(user.user);
        }else{
            setIsLoggedIn(false)
        }
    }, [])
    return (

        <div className='profile' >
            <Notification isOpen={isOpen} onClose={handleClose} />
            <div className="profileimg">
                <img src={user.profile_picture} alt="profile" />
                <div className="welcome">
                    <p>Welcome back</p>
                    <h4>{user.firstName} {user.lastName}</h4>
                </div>
            </div>
            <div className="notification">
                <BiBell style={headerFontStyles} onClick={handleClickOpen}></BiBell>
                <div className="ball">
                    <p>3</p>
                </div>
            </div>
        </div>

    )
}

export default Profile
