// import React from 'react';
// import { FiShare } from 'react-icons/fi';
// import './style.css';

const headerFontStyles = { color: '#1e8fffbb', fontSize: '30px' };

// export default function FileUpload() {
//     return (
//         <div className='file__upload'>
//             <div className="upload">
//                 <FiShare style={headerFontStyles} />
//                 <p>Drop your files here</p>
//             </div>
//         </div>
//     )
// }
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiShare } from 'react-icons/fi';
import axios from 'axios';

const FileUpload = () => {
    const [uploadProgress, setUploadProgress] = useState(0);

    const onDrop = useCallback(async (acceptedFiles) => {
        const formData = new FormData();
        for (let i = 0; i < acceptedFiles.length; i++) {
            console.log(acceptedFiles);
            formData.append('file', acceptedFiles[i]);
        }

        // try {
        //     const config = {
        //         headers: {
        //             'content-type': 'multipart/form-data'
        //         },
        //         onUploadProgress: (progressEvent) => {
        //             setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        //         }
        //     }

        //     const res = await axios.post('/upload', formData, config);
        //     console.log(res.data);
        //     alert('Files were successfully uploaded!');
        // } catch (err) {
        //     console.error(err);
        //     alert('Failed to upload files. Please try again.');
        // }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className='file__upload'>
            <div className="upload">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <FiShare style={headerFontStyles} />
                    
                )}
                {/* <p>Drop your files here</p> */}
            </div>    
        </div>
    );
}

export default FileUpload;
