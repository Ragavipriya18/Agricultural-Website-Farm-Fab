import React, { useState } from "react";
import '../styles/Login.css';
import{Link} from "react-router-dom";
import {FaFacebook} from "react-icons/fa";
import { SiGmail } from "react-icons/si";




function Login(){

     const [username,setUsername] = useState("");
     const [password,setPassword] = useState("");
   

     const [error,setError] = useState("");
     

     const handleSubmit = (e) =>{
         
          e.preventDefault();

          if(!username || !password){
               setError("*Please enter a username and password");
               return;
          }
          else{
               alert('LOGGED IN SUCCESSFULLY!');
          }
          setUsername("");
          setPassword("");
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
       

    
    return(
          <div>
               <div className="main_lg">
               <img src="https://w0.peakpx.com/wallpaper/284/594/HD-wallpaper-field-in-the-heart-land-yield-crop-clouds-farm-season-heartland-land-rows-harvest-cloud-tractor-sky-skies-farmland-heart-nature-heart-land-crops-field.jpg"alt='navbar_image' height="400px" width="1536px"></img>
               </div>


            <div className="main_login">
                <h1>LOGIN</h1>

                
               <div>
                    
                <input id="lg1" type="text" placeholder="Username" value={username} onChange={handleUsernameChange}></input>
                <br></br>
                <br></br>
                <input  id="lg2" type="text" placeholder="Create password" value={password} onChange={handlePasswordChange}></input>
 
  

                
               
               </div>
               {error && <p>{error}</p>}
               <br></br>
               

               <div className="box-2">
                    <button onClick={handleSubmit}>SignUp</button>
               </div>

               <div className="lg_1">
               <div className="lg_2">
                    <h3>Don't have an account? </h3>
               </div>
               <div className="lg_3">
                    <h3><Link to="/SignUp">Signup</Link></h3>
               </div>
               <br></br>
              </div>

              <div className="lg_4">
              <h3>---------------Or---------------</h3>
              </div>
              <div className="lg_5">
              <div><Link to="http://www.facebook.com"><FaFacebook size="2rem" color="black"/></Link></div>
              <div><Link to="https://www.gmail.com."><SiGmail size="2rem" color="black"/></Link></div>
              </div>
             
          </div>
          </div>
 );
}
export default Login;