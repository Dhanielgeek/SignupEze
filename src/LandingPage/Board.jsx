import React from 'react'
import './Main.css';

const Board = ({isVisible,onClose}) => {



    
  return (
    <div className={`BoardBody ${isVisible ? 'visible' : ''}`}>
        <div className="InputField">
            <label htmlFor="">Board Name</label>
            <input type="text" />
            <button onClick={onClose}>Create Board</button>
        </div>
    </div>
  )
}

export default Board