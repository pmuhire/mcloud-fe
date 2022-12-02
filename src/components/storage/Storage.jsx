import React from 'react';
import "./storage.css";
import { BiHdd, BiFile, BiExclude, BiVideo } from 'react-icons/bi';
import { FiImage } from 'react-icons/fi';
import premium from "../../../public/premium.png"

const headerFontStyles = { color: '#1e8fffbb', fontSize: '30px' };
const iconStyleOne = { color: '#8804e085', fontSize: '20px', paddingLeft: "3px" };
const iconStyleTwo = { color: '#e08003e7', fontSize: '20px', paddingLeft: "3px" };
const iconStyleThree = { color: '#07b35dbd', fontSize: '20px', paddingLeft: "3px" };
const iconStyleFour = { color: '#ff00009f', fontSize: '20px', paddingLeft: "3px" };
export default function Storage() {
    return (
        <div className='storage_section'>
            <h2>Storage</h2>
            <div className="card disk">
                <div className="upper">
                    <BiHdd style={headerFontStyles} />
                    <h4>DISK C</h4>
                    <p>300GB</p>
                </div>
                <div className="lower">
                    <h4>250GB Used of 300GB</h4>
                    <div className="percentage">
                        <div className="used"></div>
                    </div>
                </div>
            </div>
            <div className="detail_storage">
                <h2>DETAIL STORAGE</h2>
                <div className="detail_card">
                    <div className="upper">
                        <div className="icon">
                            <FiImage style={iconStyleOne} />
                        </div>
                        <div className="text">
                            <h3>Pictures</h3>
                            <h6>127 Files</h6>
                        </div>
                        <div className="size">
                            <p>30GB</p>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="progres">
                            <div className="covered four"></div>
                        </div>
                    </div>

                </div>
                <div className="detail_card">
                    <div className="upper">
                        <div className="icon">
                            <BiFile style={iconStyleTwo} />
                        </div>
                        <div className="text">
                            <h3>Documents</h3>
                            <h6>127 Files</h6>
                        </div>
                        <div className="size">
                            <p>30GB</p>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="progres">
                            <div className="covered three"></div>
                        </div>
                    </div>

                </div>
                <div className="detail_card">
                    <div className="upper">
                        <div className="icon">
                            <BiVideo style={iconStyleThree} />
                        </div>
                        <div className="text">
                            <h3>Videos</h3>
                            <h6>127 Files</h6>
                        </div>
                        <div className="size">
                            <p>30GB</p>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="progres">
                            <div className="covered two"></div>
                        </div>
                    </div>

                </div>
                <div className="detail_card">
                    <div className="upper">
                        <div className="icon">
                            <BiExclude style={iconStyleFour} />
                        </div>
                        <div className="text">
                            <h3>Others</h3>
                            <h6>30 Files</h6>
                        </div>
                        <div className="size">
                            <p>2GB</p>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="progres">
                            <div className="covered one"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="premium">
                <img src={premium} alt="premium" />
                <h2>Get more space for files</h2>
                <p>We offer you unlimited storage space for all your needs</p>
                <button>Upgrade to Pro</button>
            </div>
        </div>
    )
}
