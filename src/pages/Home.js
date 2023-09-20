import React from "react";
import '../styles/Home.css';
import {Link} from 'react-router-dom';
function Home(){


    return(
        <div>
        <div className='main_home'>
        <img src="https://w0.peakpx.com/wallpaper/284/594/HD-wallpaper-field-in-the-heart-land-yield-crop-clouds-farm-season-heartland-land-rows-harvest-cloud-tractor-sky-skies-farmland-heart-nature-heart-land-crops-field.jpg" alt='navbar_image' height="400px" width="1536px"></img>

       
            
        </div>
        <div className="main_home1">
        <h1>HOME</h1>
        </div>
       
                
            
     
        <div className="welcome">
        Welcome to Farm Fab, your ultimate destination for all things agriculture! Whether you're a seasoned farmer, a passionate gardener, or simply curious about the world of agriculture, you've come to the right place.

        At Farm Fab, we understand the vital role that agriculture plays in our lives. From providing us with nourishing food to supporting rural economies, agriculture is the backbone of our society. Our mission is to empower and educate individuals like you, by providing a comprehensive platform that covers a wide range of agricultural topics.
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="home">
            <div className="home1">
            <img src="home1.png" alt="" width="60px" height="60px"></img>
                <h4>GARDEN LANDSCAPINGS</h4>
                <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                <Link to="/Readmore1">--READ MORE--</Link>
                
            </div>

            <div className="home2">
                 <img src="home2.png" alt="" width="60px" height="60px"></img>
                <h4>SOIL MAKING & CARBO</h4>
                <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                <Link to="/Readmore2">--READ MORE--</Link>
            </div>

            <div className="home3">
            <img src="home3.png" alt="" width="60px" height="60px"></img>
                <h4>PLANTING PLANTS</h4>
                <p>The laying out and care of a plot of ground devoted partially or wholly.</p>
                <Link to="/Readmore3">--READ MORE--</Link>
            </div>

          
        </div>

       { /*<div className="home4">
        <div className="home5">
                <img src="home4.png" alt="" width="300px" height="550px"></img>
        </div>
        <div className="home6">
            <img src="home5.png" alt="" width="260px" height="200px"></img>
            <img src="home6.png" alt="" width="260px" height="200px"></img>
        </div>
        <div className="home7">
            
        </div>
    </div>*/}
<br></br>
<br></br>

    <div className="home4">
            <h5>PHOTO GALLARY</h5>
            <h2>OUR LATEST PROJECTS</h2>
    </div>
    <br></br>
    <div className="home5">
        <div className="home6">
        <img src="home7.png" alt="" width="400px" height="350px"></img>
        </div>
        <div className="home7">
        <img src="home8.png" alt="" width="400px" height="350px"></img>
        </div>
        <div className="home8">
        <img src="home9.png" alt="" width="400px" height="350px"></img>
        </div>
    </div>
    <br></br>
   <div className="home9">
        <div className="home10"><h3>MOWING THE GRASS</h3></div>
        <div className="home11"><h3>WATERING PLANTS</h3></div>
        <div className="home12"><h3>LAWN AND GARDEN MAINTENANCE</h3></div>
</div>
    <br></br>
    <div className="home13">
        <Link to="/Home1" className="btn2">LOAD MORE+</Link>
    </div>

    <br></br>
    <br></br>
    <div className="home14">
        <h5>[BLOGS]</h5>
        <h1>BLOGS & INSIGHTS</h1>
        <br></br>
        <img src="plant1.jpg" alt=""></img>
        <h2>HYDROPONICS</h2>
<p>Hydroponics is a method of growing plants without soil, where plants are instead grown in a nutrient-rich water solution.</p>
<Link to='/Blogs1' className="button" >More Items+</Link>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <div className="home15">
        <div className="home16">
            <img src="home13.png" alt=""></img>
        </div>
        <div className="home17">
            <h5>SINCE FROM 2000</h5>
        <h1>GARDENY OFFERS A FULL-SERVICE</h1>
<p>Most gardens consist of a mix of natural and constructed elements, although even very natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.</p>
<div className="home18">
    <div className="home19">
<img src="logo2.jpg" alt="" width="150px" height="150px"></img>
</div>
<div className="home20">
<h3>FOUNDATION - FARM FAB</h3>

</div>
</div>
        </div>

    </div>
   
         
         
        </div>
        
        

    );
}
export default Home;