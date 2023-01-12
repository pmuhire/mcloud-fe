import React from 'react';
import "./sidebar.css";
import Profile from '../profile';
import FileUpload from '../fileUpload';
import { NavLink } from 'react-router-dom';
// icons
import { AiOutlineFolder, AiTwotoneFolder, AiFillDashboard, AiOutlineLogout } from "react-icons/ai";
import { BiHeart, BiRecycle, BiShareAlt, BiCaretDown } from "react-icons/bi";
import { WiCloud } from 'react-icons/wi';
import { FiSettings, FiClock, FiVideo, FiImage, FiFileText, FiStar } from "react-icons/fi";

const headerFontStyles = { color: '#fff', fontSize: '60px' };
const fontStyles = { color: '#fff', fontSize: '30px', hover: { color: 'dodgerblue' } };
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <main className='sidebar_icons'>
                <section className="header">
                    <div className="logo">
                        <WiCloud style={headerFontStyles} /><span>MCloud</span>
                    </div>
                </section>
                <section className='sidebar__links'>
                    <div className="links">
                        <NavLink to="/"><AiFillDashboard style={fontStyles} />
                            {/* <span>Dashboard</span> */}
                        </NavLink>
                        <NavLink to="/star"><FiStar style={fontStyles} /></NavLink>
                            {/* <span>Favourites</span> */}
                        <NavLink><AiOutlineFolder style={fontStyles} />
                            {/* <span>My folder</span> */}
                        </NavLink>

                        <NavLink to="/shared"><BiShareAlt style={fontStyles} /></NavLink>

                        <NavLink to="/bin"><BiRecycle style={fontStyles} />
                            {/* <span>Recycle bin</span> */}
                        </NavLink>
                        <NavLink to="/settings"><FiSettings style={fontStyles} />
                            {/* <span>Settings</span> */}
                        </NavLink>
                    </div>
                    <div className="logout">
                        {/* <a href='#'><BiLogOut /></a> */}
                        <NavLink to="/login"><AiOutlineLogout style={fontStyles} />
                            {/* <span>Logout</span> */}
                        </NavLink>
                    </div>
                </section>
            </main>
            <main className='section'>
                <Profile> </Profile>
                <FileUpload />
                <div className="links__section">
                    <ul>
                        <h2>My Document</h2>
                        <li><a href="#"><AiTwotoneFolder /><span>All Folder</span></a></li>
                        <li><a href="#"><FiClock /><span>Recent File</span><BiCaretDown style={{fontSize: '25px',borderRadius:"5px"}} /></a>
                            <ul>
                                <li><a href="#">Hello.docx</a></li>
                                <li><a href="#">pm.jpg</a></li>
                                <li><a href="#">Companyprofile.mkv</a></li>
                                <li><a href="#">resume.pdf</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><FiVideo /><span>Videos</span></a></li>
                        <li><a href="#"><FiImage /><span>Images</span></a></li>
                        <li><a href="#"><FiFileText /><span>Documents</span></a></li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
