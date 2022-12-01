import React from 'react';
import { FiShare } from 'react-icons/fi';
import './style.css';

const headerFontStyles = { color: '#1e8fffbb', fontSize: '30px' };

export default function FileUpload() {
    return (
        <div className='file__upload'>
            <div className="upload">
                <FiShare style={headerFontStyles} />
                <p>Drop your files here</p>
            </div>
        </div>
    )
}
