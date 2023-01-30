import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Storage from '../storage/Storage';
import Navbar from '../navbar/navbar';
import { BiFile, BiExclude, BiVideo, BiImage,BiShareAlt, BiDownload,BiStar } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { FiDelete } from 'react-icons/fi';
import { BsFillPencilFill} from "react-icons/bs"
import { FiMoreHorizontal } from 'react-icons/fi';
import "./shared.css";

const iconStyleOne = { color: '#8804e085', fontSize: '30px', padding: "3px" };
const iconStyleTwo = { color: '#e08003e7', fontSize: '30px', padding: "3px" };
const iconStyleThree = { color: '#07b35dbd', fontSize: '30px', padding: "3px" };
const iconStyleFour = { color: '#ff00009f', fontSize: '30px', padding: "3px" };

const iconStyle = { color: '238', fontSize: '30px', padding: "3px" };

const Shared = () => {
    const [isOpen, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose=()=>{
        if(isOpen){
            setOpen(false);
        }
    }

    return (
        <div className='dashboard'>
            <section className='aside'>
                <Sidebar />
            </section>
            <section className='content'>
                <Navbar />
                <div className="shared-container" onClick={handleClose}>
                    <h2>Shared</h2>
                    <More isOpen={isOpen} onClose={handleClose} />
                    <table>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Owner</th>
                            <th>More</th>
                        </tr>
                        <tr>
                            <td><BiImage style={iconStyleTwo} /></td>
                            <td>
                                <span>Profile.png</span>
                            </td>
                            <td>14 MBS</td>
                            <td>Muhire Patrick</td>
                            <td><FiMoreHorizontal style={iconStyleTwo}  onClick={handleClickOpen}/></td>

                        </tr>
                        <tr>
                            <td><BiVideo style={iconStyleThree} /></td>
                            <td>
                                <span>myvid.mp4</span>
                            </td>
                            <td>134MBS</td>
                            <td>Muhire Patrick</td>
                            <td><FiMoreHorizontal style={iconStyleTwo} onClick={handleClickOpen} /></td>
                        </tr>
                        <tr>
                            <td><BiFile style={iconStyleOne} /></td>
                            <td>
                                <span>Hello.docx</span>
                            </td>
                            <td>134MBS</td>
                            <td>Muhire Patrick</td>
                            <td><FiMoreHorizontal style={iconStyleTwo} onClick={handleClickOpen} /></td>
                        </tr>
                        <tr>
                            <td><BiExclude style={iconStyleFour} /></td>
                            <td>
                                <span>Hello.docx</span>
                            </td>
                            <td>134MBS</td>
                            <td>Muhire Patrick</td>
                            <td><FiMoreHorizontal style={iconStyleTwo} onClick={handleClickOpen} /></td>
                        </tr>
                        <tr>
                            <td><BiFile style={iconStyleOne} /></td>
                            <td>
                                <span>Hello.docx</span>
                            </td>
                            <td>134MBS</td>
                            <td>Muhire Patrick</td>
                            <td><FiMoreHorizontal style={iconStyleTwo} onClick={handleClickOpen} /></td>
                        </tr>
                        <tr>
                            <td><BiImage style={iconStyleTwo} /></td>
                            <td>
                                <span>Hello.docx</span>
                            </td>
                            <td>134MBS</td>
                            <td>Muhire Patrick</td>
                            <td><FiMoreHorizontal style={iconStyleTwo} onClick={handleClickOpen} /></td>
                        </tr>
                        <tr>
                            <td><BiVideo style={iconStyleThree} /></td>
                            <td>
                                <span>Hello.docx</span>
                            </td>
                            <td>134MBS</td>
                            <td>Muhire Patrick</td>
                            <td><FiMoreHorizontal style={iconStyleTwo} onClick={handleClickOpen}/></td>
                        </tr>
                    </table>
                </div>
            </section>
            <section className='storage'>
                <Storage />
            </section>
        </div>
    )
}

const More = (props) => {
    const { isOpen, onClose } = props;
    let dialog = (
        <div className='dialog-box'>
            <div>
                <BiShareAlt style={iconStyle} /> <span>Share</span>
            </div>
            <div>
                <FiLink style={iconStyle} /> <span>Get Link</span>
            </div>
            <div>
                <BiDownload style={iconStyle} /> <span>Download</span>
            </div>
            <div>
                <BsFillPencilFill style={iconStyle} /> <span>Rename</span>
            </div>
            <div>
                <BiStar style={iconStyle} /> <span>Star</span>
            </div>
            <div>
                <FiDelete style={iconStyle} /> <span>Delete</span>
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

export default Shared
