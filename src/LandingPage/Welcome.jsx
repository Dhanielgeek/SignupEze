import React from 'react'
import './Main.css';
import 'animate.css'
import { Link} from 'react-router-dom';


const Welcome = () => {

  return (
   <div className="WelcomeBody">
    <div className="DropWel">
    <button>Welcome to Dhaniel's DashBoard</button>
    <h4>Sign Up <Link to='/sign-ups' style={{textDecoration: "none",color:"white"}}>Here to Xplore</Link></h4>
    </div>
   </div>
  )
}

export default Welcome