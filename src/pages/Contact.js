import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPencilAlt, FaUserAlt,FaPhone, FaMailBulk, FaMap } from "react-icons/fa";
import GoogleMapReact from 'google-map-react';
import {Link} from "react-router-dom";
import { useState } from 'react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact() 
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameerror, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if(!name){
          setNameError('*Please enter a name');
         
        } 
       


        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          setEmailError('*Please enter a valid email address');
          return;
        }
        
        else{
          alert("SUBMITTED SUCCESSFULLY!");
        }
        
       
        setName("");
        setEmail("");
        setEmailError("");
        setNameError("");

        

        
     } 
    
  return (
      
        <div>
          
    <div className='main_about'>
    <img src="https://w0.peakpx.com/wallpaper/284/594/HD-wallpaper-field-in-the-heart-land-yield-crop-clouds-farm-season-heartland-land-rows-harvest-cloud-tractor-sky-skies-farmland-heart-nature-heart-land-crops-field.jpg" alt='navbar_image' height="400px" width="1536px"></img>
            
        </div>
    <div className="main_about1">
        <h1>CONTACT</h1>
        </div>
    <div className='Contact'>
      <div className='pg1'>
      <div className='main'>
        <div className='head1'>
          <h2>CALL TO ACTION</h2>
        </div>
        <div className='head2'>
          <h1>SEND US A MESSAGE FOR NEXT PROJECT</h1>
        </div>
        <div className='form'>
          <div className='form1'>
            <div className='name'>
              <FaUserAlt />
              <input id="n1" type='text' placeholder='ENTER FULL NAME' value={name} onChange={(e) => setName(e.target.value)} />
              {nameerror && <div className='error'>{nameerror}</div>}
            </div>
            <div className='address'>
              <FaEnvelope />
              <input id="a1" type='text' placeholder='EMAIL ADDRESS' value={email} onChange={(e) => setEmail(e.target.value)} />
              {emailError && <div className='error'>{emailError}</div>}

            </div>
          </div>
          <div className='msg'>
            <FaPencilAlt />
            <input id="m1" type='text' placeholder='MESSAGE' />
          </div>
          <button className='btn' onClick={handleSubmit}>SUBMIT</button>

        </div>
      </div>
      <div className='img'>
        <img src='boy.jpg' alt='contact' width="300" height="550" />
      </div>
      </div>
      <div className='pg2'>
        <div className='page'>
            <div className='headq'>
                <br/>
                <h3>CONTACT</h3>
                <h1>GET IN TOUCH</h1>
            </div>
        <SimpleMap />
        <div className='hq'>
        <h1>HEAD QUATERS</h1>
            <br/>
            <br/>
            <div className='box2'>  
                            <div className='contact-icon'> 
                                <div className='clogo' >
                               <FaPhone/>  
                               </div> 
                               <div className='cdefn'>
                               <Link to="https://www.whatsapp.com">8870200361</Link>   
                               </div>
                            </div>
                            <br/>
                            <br/>
                            <div className='mail-icon'>
                                <div className='mlogo'>
                                    <FaMailBulk/>
                                </div>
                                <div className='mdefn'>
                                    <Link to="https://www.gmail.com">infogardania.gmail.com</Link> 
                                </div>  
                            </div>
                            <br/>
                            <br/>
                            <div className='map-icon'>
                                <div className='maplogo'>
                                    <FaMap/>
                                </div>
                                <div className='mapdefn'>
                                    <Link to="https://goo.gl/maps/5HCsjkR8PSCjL16T9">2/172 pallivasal street kunnathoor, Tirunelveli Town, Tirunelveli, Tamil Nadu 627001</Link> 
                                </div>  
                            </div>
                            
            </div>
        </div>
        </div>
        </div>
       </div>
    </div>
    
  );
}

function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    
    
    <div className='map' style={{ height: '50vh', width: '40%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    
  );
}

export default Contact;