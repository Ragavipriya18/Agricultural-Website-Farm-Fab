import React from 'react';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';
import {FaPhone,FaMap,FaMailBulk} from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
    <footer className='main_footer'>
      <div className="footer-section1">
        <h3>ABOUTUS</h3>
        <p>Welcome to FarmFab, we are passionate about agriculture and dedicated to providing high-quality products and services to farmers and agricultural businesses. With years of experience in the industry, we understand the challenges faced by farmers and strive to offer innovative solutions to enhance productivity and sustainability.
      </p>
    
      </div>

      <div className="footer-section2">
        <h3>MAIN PAGES</h3>
        <ul>
        <li><a href='/'>HOME</a></li>
        <br></br>
        <li><a href='/AboutUs'>ABOUTUS</a></li>
        <br></br>
        <li><a href='/Services'>SERVICES</a></li>
        <br></br>
        <li><a href='/Blogs1'>BLOGS</a></li>
        <br></br>
        <li><a href='/Contact'>CONTACT</a></li> 
        </ul>  
        </div>
        <div className="footer-section3">
  <h3>OUR SERVICES</h3>
  <ul>
    <li><a href="/">LAWN MOVING</a></li>
    <br></br>
    <li><a href="/">HEDGE CUTTING</a></li>
    <br></br>
    <li><a href="/">FLOWER PLANTING</a></li>
    <br></br>
    <li><a href="/">GARDEN REMODELING</a></li>
    
    
  </ul>
</div>


      <div className="footer-section4">
        <h3>TERMS OF SERVICES</h3>
        <ul>
          <li><FaPhone size="1rem" color="white"/> 
<Link to="https://www.whatsapp.com">8870200361</Link></li>
<br></br>
          <li> <FaMailBulk size="1rem" color="white"/>
<Link to="https://www.gmail.com">infogardania.gmail.com</Link></li>
<br></br>
          <li><FaMap size="1rem" color="white"/>
<Link to="https://goo.gl/maps/5HCsjkR8PSCjL16T9">2/172 pallivasal street kunnathoor, Tirunelveli Town, Tirunelveli, Tamil Nadu 627001</Link> </li>

        </ul>
      </div>
      
     

    
      
    </footer>
    
     <div className="footer-bottom">
     <img src="logo2.jpg" alt='' width="60px" height="60px"></img>
     <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
     </div>
     </div>
  );
};

export default Footer;
