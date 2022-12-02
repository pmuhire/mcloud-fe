import React from 'react';
import "./quickaccess.css";
import { FiFileText, FiMoreVertical,FiImage } from 'react-icons/fi';
import { BiExclude,BiVideo } from 'react-icons/bi';

const iconStyleTwo = { color: '#e08003e7', fontSize: '30px',paddingLeft:"3px" };
const iconStyleThree = { color: '#07b35dbd', fontSize: '30px',paddingLeft:"3px" };
const iconStyleFour = { color: '#ff00009f', fontSize: '30px',paddingLeft:"3px" };

const styling = { color: "#130f0fd2", fontSize: "35px" };
const activeCard={ color: "#fff", fontSize: "35px" }

const QuickAccess = () => {
  return (
    <div className='quick__access'>
      <h2>QuickAccess</h2>
      <div className="cards">
        <div className="card active">
          <FiFileText style={activeCard} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={activeCard} />
        </div>
        <div className="card">
          <BiExclude style={iconStyleFour} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={styling} />
        </div>
        <div className="card">
          <FiImage style={iconStyleThree} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={styling} />
        </div>
        <div className="card">
          <BiVideo style={iconStyleTwo} />
          <p>Skipers.DOCX</p>
          <FiMoreVertical style={styling} />
        </div>
      </div>
    </div>
  )
}

export default QuickAccess;
