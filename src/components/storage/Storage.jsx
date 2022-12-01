import React from 'react';
import "./storage.css";
import { BiHdd } from 'react-icons/bi';

const headerFontStyles = { color: '#1e8fffbb', fontSize: '30px' };
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

            </div>
        </div>
    )
}
