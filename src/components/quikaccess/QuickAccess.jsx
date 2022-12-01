import React from 'react';
import "./quickaccess.css";
import { FiFileText, FiMoreVertical } from 'react-icons/fi';

const styling = { color: "#130f0fd2", fontSize: "35px" }

const QuickAccess = () => {
  return (
    <div className='quick__access'>
      <h2>QuickAccess</h2>
      <div className="cards">
        <div className="card">
          <FiFileText style={styling} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={styling} />
        </div>
        <div className="card">
          <FiFileText style={styling} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={styling} />
        </div>
        <div className="card">
          <FiFileText style={styling} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={styling} />
        </div>
        <div className="card">
          <FiFileText style={styling} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={styling} />
        </div>
      </div>
    </div>
  )
}

export default QuickAccess;
