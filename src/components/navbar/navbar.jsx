import React from 'react';
import "./navbar.css";
import { BiSearch } from 'react-icons/bi';

const stylesSearchIcon = { fontSize:"22px",color:"#130f0fd2",marginTop:"2px" }
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="folder">
                <h2>All Folder</h2>
                <p>All Documents are in here</p>
            </div>
            <div className="search">
                <div className="search_field">
                    <label htmlFor="search"><BiSearch style={stylesSearchIcon} /></label>
                    <input type="text" id='search' placeholder='Search your file here' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
