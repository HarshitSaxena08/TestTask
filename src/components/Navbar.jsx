import React from 'react'
import  "../style/Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div className='navContainer'>

        <div className='Nav'>
          <div>
            <img src='../../image/logo.png' className='logo' alt='logo' />
          </div>
          <div className='menus'>
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/finddoctor">Find Doctors</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>


        <div className='btnContainer'>
          <button className='loginBtn'>Log In</button>
          <button className='signupBtn'>Sign Up</button>
        </div>
      </div>

    </>
  )
}

export default Navbar;