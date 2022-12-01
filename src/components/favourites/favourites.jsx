import React from 'react';
import "./favourites.css";
import { FiFolder, FiMoreVertical } from 'react-icons/fi';


const styles = { fill: "#ddd236e5", color: "#ddd236e5", fontSize: "35px" }
function Favourites() {
    return (
        <div className='favourites'>
            <div className="view__all">
                <h2>FAVOURITE FOLDER</h2>
                <a href="#">VIEW ALL</a>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="upper">
                        <FiFolder style={styles} />
                        <p>Foto Pantai</p>
                        <FiMoreVertical />
                    </div>
                    <div className="lower">
                        <h4>245Files</h4>
                        <p>2.0GB Used</p>
                    </div>
                </div>
                <div className="card">
                    <div className="upper">
                        <FiFolder style={styles} />
                        <p>Foto Pantai</p>
                        <FiMoreVertical />
                    </div>
                    <div className="lower">
                        <h4>245Files</h4>
                        <p>2.0GB Used</p>
                    </div>
                </div>
                <div className="card">
                    <div className="upper">
                        <FiFolder style={styles} />
                        <p>Foto Pantai</p>
                        <FiMoreVertical />
                    </div>
                    <div className="lower">
                        <h4>245Files</h4>
                        <p>2.0GB Used</p>
                    </div>
                </div>
                <div className="card">
                    <div className="upper">
                        <FiFolder style={styles} />
                        <p>Foto Pantai</p>
                        <FiMoreVertical />
                    </div>
                    <div className="lower">
                        <h4>245Files</h4>
                        <p>2.0GB Used</p>
                    </div>
                </div>
                <div className="card">
                    <div className="upper">
                        <FiFolder style={styles} />
                        <p>Foto Pantai</p>
                        <FiMoreVertical />
                    </div>
                    <div className="lower">
                        <h4>245Files</h4>
                        <p>2.0GB Used</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favourites
