import React from 'react';
import mtcLogo from '../images/mtc_logo.png'
import './NavBar.css'; 

export default function NavBar() {
  return (
    <div>
         
        <nav className='mainNav'>
        <img src={mtcLogo} alt='mtc logo' className='logoMTC'/>
        <h1 className='navHeading'> Task Manager !</h1>
        </nav>
    </div>
  );
}
