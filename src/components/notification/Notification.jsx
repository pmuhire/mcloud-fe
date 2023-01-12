import React from 'react';
import "./notification.css";
import { FiX } from 'react-icons/fi';

const headerFontStyles = { color: '#130f0fd2', fontSize: '30px' };

const Notification = (props) => {
  const { isOpen,onClose } = props;
  let dialog = (
    <div className='notifications-container'>
      <div className="card">
        <h2>Notifications</h2>
        <FiX onClick={onClose} style={headerFontStyles}></FiX>
      </div>
      <div className="notifications-card">
        <h2>Hello this is the first notification</h2>
        <p>Read this Notification carefully</p>
      </div>
      <div className="notifications-card">
        <h2>Hello this is the first notification</h2>
        <p>Read this Notification carefully</p>
      </div>
      <div className="notifications-card">
        <h2>Hello this is the first notification</h2>
        <p>Read this Notification carefully</p>
      </div>
      <div className="notifications-card">
        <h2>Hello this is the first notification</h2>
        <p>Read this Notification carefully</p>
      </div>
      <div className="notifications-card">
        <h2>Hello this is the first notification</h2>
        <p>Read this Notification carefully</p>
      </div>
      <div className="notifications-card">
        <h2>Hello this is the first notification</h2>
        <p>Read this Notification carefully</p>
      </div>
    </div>
  );
  if (!isOpen) {
    dialog = null;
  }
  return (
    <>
       {dialog} 
    </>
  )
}

export default Notification
