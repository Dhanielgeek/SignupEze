import React from 'react'
import './Main.css'
import Menu from './Menu'
import TaskBody from './TaskBody'

const MainPage = () => {
  return (
    <div className='MainBody'>
      <div style={{
        minWidth : "20%",
        height: "100%",
        background: "#001d3d"
      }}>
        <Menu/>
      </div>
      <div style={{
        width : "100%",
        height: "100%",
        background: "#000814"
      }}>
      <TaskBody/>
      </div>
    
    </div>
  )
}

export default MainPage