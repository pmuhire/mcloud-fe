import React from 'react';
import "./sidebar.css";
import Profile from '../profile';
import FileUpload from '../fileUpload';
// icons
import { AiOutlineFolder, AiTwotoneFolder, AiFillDashboard, AiOutlineLogout } from "react-icons/ai";
import { BiHeart, BiRecycle, BiShareAlt, BiCaretDown } from "react-icons/bi";
import { WiCloud } from 'react-icons/wi';
import { FiSettings, FiClock, FiVideo, FiImage, FiFileText } from "react-icons/fi";

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
                        <a href="#"><AiFillDashboard style={fontStyles} />
                            {/* <span>Dashboard</span> */}
                        </a>
                        <a href=""><BiHeart style={fontStyles} />
                            {/* <span>Favourites</span> */}
                        </a>
                        <a href="#"><AiOutlineFolder style={fontStyles} />
                            {/* <span>My folder</span> */}
                        </a>
                        <a href=""><BiShareAlt style={fontStyles} />
                            {/* <span>Shared</span> */}
                        </a>
                        <a href=""><BiRecycle style={fontStyles} />
                            {/* <span>Recycle bin</span> */}
                        </a>
                        <a href=""><FiSettings style={fontStyles} />
                            {/* <span>Settings</span> */}
                        </a>
                    </div>
                    <div className="logout">
                        {/* <a href='#'><BiLogOut /></a> */}
                        <a href='#'><AiOutlineLogout style={fontStyles} />
                            {/* <span>Logout</span> */}
                        </a>
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
