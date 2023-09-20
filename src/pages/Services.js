import React from "react";
import '../styles/Services.css';
import{Link} from "react-router-dom";

function Services(){
    return(
           <div>
            <div className="main_service">
                <img src="https://w0.peakpx.com/wallpaper/284/594/HD-wallpaper-field-in-the-heart-land-yield-crop-clouds-farm-season-heartland-land-rows-harvest-cloud-tractor-sky-skies-farmland-heart-nature-heart-land-crops-field.jpg" alt='navbar_image' height="400px" width="1536px"></img>
           </div>
           <div className="main_service1">
                <h1>SERVICES</h1>
                <div className="page1">
                    <div className="container_1">
                       <div className="ye1">
                            <h2>Why Choose Us?</h2>
                            <h3>Any Gardening Services?</h3>
                       </div>

                       <div className="ye2">

                       <div className="ye2_1">
                            <img src="icon1.jpg" alt="" width="110px" height="110px"></img>
                        </div>

                        <div className="ye2_2">
                            <h4>Quality & Reliability</h4>
                            <p>Most gardens consist of a mix of natural & constructed elements, although even very natural garden</p>
                       </div>

                       </div>

                        <div className="ye3">
                       <div className="ye3_1">
                       <img src="icon2.jpg" alt="" width="80px" height="80px"></img>
                       </div>

                       <div className="ye3_2">
                            <h4>Award Winning Company</h4>
                            <p>Most gardens consist of a mix of natural & constructed elements, although even very natural garden</p>
                        </div>
                      </div>

                    </div>

                </div>
            </div>  
           
            <div className="service">
                <div className="service1">
                    <img src="service1.jpg" alt="pic1" width="100px" height="100px"></img>
                    <h4>GARDEN LANDSCAPING</h4>
                    <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                    <Link to="/Readmore1" className="btna">READ MORE+</Link>
    

                </div>
                <div className="service2">
                    <img src="service2.jpg" alt="pic2" width="100px" height="100px"></img>
                    <h4>SOIL MAKING AND CARBO</h4>
                    <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                    <Link to="/Readmore2" className="btnb">READ MORE+</Link>

                </div>
                <div className="service3">
                    <img src="service3.jpg" alt="pic3" width="100px" height="100px"></img>
                    <h4>PLANTING PLANTS</h4>
                    <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                    <Link to="/Readmore3" className="btnc">READ MORE+</Link>
                </div>
            </div>
            <div className="servicee">
                <div className="servicee1">
                    <img src="service4.jpg" alt="pic4" width="100px" height="100px"></img>
                    <h4>NEW PLANT SEEDS</h4>
                    <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                    <Link to="/Readmore4" className="btnd">READ MORE+</Link>
                </div>
                <div className="servicee2">
                    <img src="service5.jpg" alt="pic5" width="100px" height="100px"></img>
                    <h4>BUTTERFLY SOLUTION</h4>
                    <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                    <Link to="/Readmore5" className="btne">READ MORE+</Link>
                </div>
                <div className="servicee3">
                    <img src="service6.jpg" alt="pic6" width="100px" height="100px"></img>
                    <h4>GARDEN TAKE CARE</h4>
                    <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                    <Link to="/Readmore6" className="btnf">READ MORE+</Link>
                </div>
            </div>
          
        
        </div>
          
    );
}
export default Services;