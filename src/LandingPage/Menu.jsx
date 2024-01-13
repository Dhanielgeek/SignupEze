import React,{useState} from 'react'
import './Main.css'
import { IoMdAddCircle } from "react-icons/io";
import { MdLightMode,MdOutlineDarkMode } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import Board from './Board';



const Menu = () => {

  
  const [showBoard, setShowBoard] = useState(false);

  const handleShowBoard = () => {
    setShowBoard(true);
  }


  return (
    <div className='MenuBody'>
      <div className="MenuHeader">
        <h3>Dhaniel <span style={{color:"#ffc300"}}>Knightz</span></h3>
      </div>
      <div className="MenuContext">
        <div className="BoardHeader">
          ALL BOARD (0)
        </div>
        <div className="AllBoard">
        <div className="CreateBoard" onClick={handleShowBoard}>
          Create New Board <IoMdAddCircle/>
        </div>
        <article className='CreatedBoard'>
          <ul>
            <li className='Active'>Writing Code</li>
            <li>Writing Code</li>
           
          </ul>
        </article>
        </div>
      </div>
      <div className="MenuFooter">
        <div className="LightMode">
          <MdOutlineDarkMode style={{color:"lightgrey"}}/> 
       <label class="switch">
      <input type="checkbox" />
      <span class="slider round"></span>
      </label>
          <MdLightMode style={{color:"lightgrey"}}/>
        </div>
        <div className="Hidebar">
          <FaRegEyeSlash/> Hide Sidebar
        </div>
      </div>
      {showBoard && <Board isVisible={showBoard} onClose={() => setShowBoard(false)} />}
    </div>
  )
}

export default Menu