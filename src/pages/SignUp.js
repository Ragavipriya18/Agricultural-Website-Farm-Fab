import React from "react";
import { useState } from "react";
import '../styles/SignUp.css';
import{Link} from "react-router-dom";
import {FaFacebook} from "react-icons/fa";
import { SiGmail } from "react-icons/si";



function SignUp(){

     const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
     e.preventDefault();
 
     // Validate signup fields
     if (!username || !password || !confirmPassword) {
       setError("*Please fill in all the fields.");
       return;
     }
 
     if (password !== confirmPassword) {
       setError("*Passwords do not match.");
       return;
     }
     else{
          alert('SIGNED UP SUCCESFULLY!')
     }
 
     // Perform signup logic here
     // ...
 
     // Clear the form
     setUsername("");
     setPassword("");
     setConfirmPassword("");
     setError("");
   };
 
   const handleUsernameChange = (e) => {
     setUsername(e.target.value);
     setError("");
   };
 
   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
     setError("");
   };
 
   const handleConfirmPasswordChange = (e) => {
     setConfirmPassword(e.target.value);
     setError("");
   };
 
 
 
          

    return(
          <div>
               <div className="main_sg">
               <img src="https://w0.peakpx.com/wallpaper/284/594/HD-wallpaper-field-in-the-heart-land-yield-crop-clouds-farm-season-heartland-land-rows-harvest-cloud-tractor-sky-skies-farmland-heart-nature-heart-land-crops-field.jpg"alt='navbar_image' height="400px" width="1536px"></img>
               </div>

              
            <div className="main_signup">
                <h1>SIGN UP</h1>

                
               <div>
                    
                <input id="s1" type="text" placeholder="Username" value={username} onChange={handleUsernameChange}></input>
                <br></br>
                <br></br>
                <input  id="s2" type="text" placeholder="Create password" value={password} onChange={handlePasswordChange}>
                </input>
                
                <br></br>
                <br></br>
                <input id="s3" type="text" placeholder="Confirm password" value={confirmPassword} onChange={handleConfirmPasswordChange}></input>
               </div>
               {error && <p>{error}</p>}
               <br></br>
               

               <div className="box-2">
                    <button onClick={handleSubmit}>SignUp</button>
               </div>

               <div className="s1_1">
               <div className="s1_2">
                    <h3>Already have an account? </h3>
               </div>
               <div className="s1_3">
                    <h3><Link to="/Login">Login</Link></h3>
               </div>
               <br></br>
              </div>

              <div className="s1_4">
              <h3>---------------Or---------------</h3>
              </div>
              <div className="s1_5">
              <div><Link to="http://www.facebook.com"><FaFacebook size="2rem" color="black"/></Link></div>
              <div><Link to="https://www.gmail.com."><SiGmail size="2rem" color="black"/></Link></div>
              
              
              </div>
              

          </div>
            </div>
                    
 );
}
export default SignUp;