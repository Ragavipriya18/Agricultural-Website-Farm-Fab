import React from 'react';
import '../styles/Navbar.css';
import {FaUserAlt} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";


function Navbar(){
        
  const location = useLocation();

    return(
            <div className='main_navbar'>
                <div className='navbar1'>
                    <img src='logo2.jpg' width="100px" height="100px" alt=''></img>
                </div>
                <div className='navbar2'>

                    <ul>
                <li><Link to="/" className={location.pathname === '/' ? 'active l1' : 'l1' }>HOME</Link></li>
                <li><Link to="/AboutUs"  className={location.pathname === '/AboutUs' ? 'active l2' : 'l2'}>ABOUT</Link></li>
                <li><Link to="/Services" className={location.pathname === '/Services' ? 'active l6' : 'l6'}>SERVICES</Link></li>
                <li><Link to="/Blogs1" className={location.pathname === '/Blogs1' ? 'active l7' : 'l7'}>BLOGS</Link></li>
                <li><Link to="/Contact" className={location.pathname === '/Contact' ? 'active l3' : 'l3'}>CONTACT</Link></li>
                
                </ul>
                    
                </div>
                <div className='navbar3'>
                <ul>
                <li><Link to="/Login" className={location.pathname === '/Login' ? 'active l4' : 'l4'}><FaUserAlt size="1em"/>LOGIN</Link></li>
                <li><Link to="/Signup" className={location.pathname === '/Signup' ? 'active l5' : 'l5'}>SIGN UP</Link></li>
                </ul>

                </div>

        </div>
    );
}
export default Navbar;