import React, { useState } from 'react';
import '../styles/Read_More6.css'; // Import the CSS file for the component

const Read_More6= () => {

    const [showCon, setShowCon] = useState(false);
  return (
    <div className="read-more-container6">
        <img src='con.jpg' alt='' width="300px" height="300px"></img>
        <div className='con1'>
      <h1 className="read-more-title6">CONSERVATION AGRI</h1>
      
      <p className="read-more-content6">
      Conservation agriculture (also known as conservation farming) is an approach to agricultural production that emphasizes the sustainable management of natural resources, soil health, and ecosystem functions. It involves adopting practices that minimize soil disturbance, enhance soil cover, and promote biodiversity, aiming to improve long-term productivity while preserving the environment.onservation agriculture is an agricultural approach that prioritizes the sustainable management of natural resources, focusing on soil health, water conservation, and biodiversity preservation. It emphasizes practices that promote long-term agricultural productivity while minimizing negative environmental impacts.
        </p>
      <div className='btnclass6'>
      <button className='btn22' onClick={()=>setShowCon(!showCon)}>TYPES & ADVANTAGES</button>
      {/*<button className='btn23' onClick={()=>setShowCon(!showCon)}>ADVANTAGES</button>*/}
      </div>
      {showCon && <div className='contypes'>
        
      <ul>
        <li>
          <strong>  No-Till or Reduced Tillage:</strong>Minimizing or eliminating the traditional practice of plowing or tilling the soil, which helps to preserve soil structure, organic matter, and microbial activity, while reducing erosion.
 </li>
        <li>
          <strong>Cover Crops:</strong>Planting cover crops, such as legumes, grasses, or other non-cash crops, to provide continuous soil cover during fallow periods, preventing soil erosion, enhancing organic matter content, and suppressing weeds.
</li>
<li>
          <strong>Crop Rotation:</strong>Rotating different crops in a specific sequence or pattern within the same field over multiple growing seasons. Crop rotation helps to break pest and disease cycles, improve soil fertility, and reduce reliance on chemical inputs.
</li>
<li>
          <strong>Conservation Crop Residue Management: </strong>Retaining crop residues, such as stalks, leaves, and roots, on the soil surface after harvest. The residues act as a protective layer, reducing erosion, improving water infiltration, and enhancing soil moisture retention.
</li>
     </ul>
        </div>}
        
 
 
 
       

     {showCon && <div className='conadv'>
        <ul>
        <li>
          <strong> Soil Health Improvement:</strong>Conservation agriculture practices promote the build-up of organic matter, improve soil structure, enhance nutrient cycling, and increase soil water-holding capacity. This leads to healthier soils with improved fertility, productivity, and resilience to environmental stressors.

</li>
        <li>
          <strong>Erosion Control:</strong> By minimizing soil disturbance and maintaining soil cover, conservation agriculture helps prevent erosion caused by wind and water. This protects valuable topsoil, reduces nutrient runoff, and preserves soil structure and productivity.
</li>
        <li>
          <strong>Water Conservation:</strong>Conservation agriculture practices, such as reduced tillage and soil cover, help retain soil moisture, reduce water evaporation, and improve water infiltration. This leads to more efficient water use, especially in areas with limited water resources or rainfall variability.
 </li>
      
      </ul>
       </div>}
       
        

 
       
 
       </div>
    </div>
  );
};

export default Read_More6;