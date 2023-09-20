import React from "react";
import '../styles/Blogs1.css';
import {Link} from 'react-router-dom';
function Blogs1(){
    return(
            <div>
                <div className='main_blog'>
                    <img src="https://w0.peakpx.com/wallpaper/284/594/HD-wallpaper-field-in-the-heart-land-yield-crop-clouds-farm-season-heartland-land-rows-harvest-cloud-tractor-sky-skies-farmland-heart-nature-heart-land-crops-field.jpg" alt='navbar_image' height="400px" width="1536px" />
                <div className='blog-page'>
                    <h1>BLOGS</h1>
                </div>
                </div>

                <div className="log">
                    <div className="log1">
                        <img src="plant1.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>HYDROPONICS</center></h4>
                        <p>Hydroponics is a method of growing plants without soil, where plants are instead grown in a nutrient-rich water solution.</p>
                        <Link to='/Read_More0' className="button1">Read More</Link>

                    </div>
                    <div className="log2">
                        <img src="plant2.jpg" alt="" width="320xp" height="200px"></img>
                        <h4><center>ORGAN FARMING</center></h4>
                        <p>Organic farming is a sustainable agricultural practice that emphasizes natural methods, biodiversity, and producing organic food.</p>
                        <Link to='/Read_More1' className="button2">Read More</Link>

                    </div>
                    <div className="log3">
                        <img src="plant3.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>VERTICAL FARMING</center></h4>
                        <p>Vertical farming is a space-efficient agriculture that involves growing plants and controlled environments to maximize crop yields in limited space.</p>
                        <Link to='/Read_More2' className="button3">Read More</Link>
                    </div>
                </div>


                    <div className="log_1">
                    <div className="log4">
                        <img src="plant4.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>URBAN FARMING</center></h4>
                        <p>Urban farming is the practice of cultivating and producing food within urban areas, utilizing rooftops, balconies, or other available spaces.</p>
                        <Link to='/Read_More3' className="button4">Read More</Link>


                    </div>
                    <div className="log5">
                        <img src="plant5.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>PRECISION AGRICULTURE</center></h4>
                        <p>Precision agriculture is an advanced farming approach that utilizes technology, improve crop productivity, and minimize resource use.</p>
                        <Link to='/Read_More4' className="button5">Read More</Link>
                    </div>
                    <div className="log6">
                        <img src="plant6.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>MODERN AGRICULTURE</center></h4>
                        <p>Modern agriculture is an advanced and technologically-driven approach to farming that utilizes innovations such as precision farming, automation.</p>
                        <Link to='/Read_More5' className="button6">Read More</Link>
                    </div>
                </div>

                
                <div className="log_2">
                    <div className="log7">
                        <img src="plant7.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>CONSERVATION AGRI</center></h4>
                        <p>Conservation agri is a farming approach that focuses on preserving soil health, minimizing soil erosion, and enhancing biodiversity through practices.</p>
                        <Link to='/Read_More6' className="button7">Read More</Link>

                    </div>
                    <div className="log8">
                        <img src="plant8.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>COMMERCIAL FARMING</center> </h4>
                        <p>Commercial farming is a large-scale agricultural production focused on generating profit by growing crops and raising livestock for sale.</p>
                        <Link to='/Read_More7' className="button8">Read More</Link>
                    </div>
                    <div className="log9">
                        <img src="plant9.jpg" alt="" width="320px" height="200px"></img>
                        <h4><center>SUBSISTANCE FARMING</center></h4>
                        <p>Subsistence farming is a small-scale agricultural practice where farmers grow crops and raise livestock to meet the basic needs of their own family.</p>
                        <Link to='/Read_More8' className="button9">Read More</Link>
                    </div>
                </div>

                </div>
            
     
    );
}
export default Blogs1;
