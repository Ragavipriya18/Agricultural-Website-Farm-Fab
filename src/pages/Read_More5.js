import React, { useState } from 'react';
import '../styles/Read_More5.css'; // Import the CSS file for the component

const Read_More5= () => {

    const [showMod, setShowMod] = useState(false);
  return (
    <div className="read-more-container5">
        <img src='mod.jpg' alt='' width="300px" height="300px"></img>
        <div className='mod1'>
      <h1 className="read-more-title5">MODERN AGRICULTURE</h1>
      
      <p className="read-more-content5">
      Modern agriculture refers to the contemporary practices, technologies, and methods employed in the agricultural industry to enhance productivity, efficiency, and sustainability. It encompasses the adoption of advanced technologies, scientific knowledge, and innovative approaches to improve crop production, animal husbandry, and overall farm management.

Modern agriculture is characterized by the integration of various technological advancements, such as precision agriculture, biotechnology, mechanization, data analytics, and remote sensing. These technologies enable farmers to optimize resource utilization, make data-driven decisions, and mitigate environmental impacts.
        </p>
      <div className='btnclass5'>
      <button className='btn20' onClick={()=>setShowMod(!showMod)}>TYPES & ADVANTAGES</button>
    {/*  <button className='btn21' onClick={()=>setShowMod(!showMod)}>ADVANTAGES</button>*/}
      </div>
      {showMod && <div className='modtypes'>
        
      <ul>
        <li>
          <strong> Genetically Modified Organisms (GMOs): </strong> Utilizing genetic engineering techniques to introduce specific traits into crops, such as increased pest or disease resistance, improved nutritional content, or tolerance to environmental stress.
  </li>
        <li>
          <strong>Controlled Environment Agriculture (CEA):</strong>Creating controlled environments, such as greenhouses or indoor farms, to optimize growing conditions and extend the growing season. CEA incorporates technologies like temperature and humidity control, artificial lighting, and precise nutrient delivery.
 </li>
<li>
          <strong>Mechanization and Automation:</strong>Utilizing machinery and automated systems for various farming operations, such as planting, harvesting, irrigation, and crop monitoring. This includes the use of tractors, combines, drones, and robotic technologies.
 </li>
     </ul>
        </div>}
        
 
       

     {showMod && <div className='modadv'>
        <ul>
        <li>
          <strong>  Increased Crop Yields:</strong>Modern agricultural practices, such as precision farming, genetic engineering, and advanced crop management techniques, help optimize crop yields. This ensures a consistent and higher supply of food, contributing to global food security.

</li>
        <li>
          <strong>Resource Efficiency:</strong>Modern agriculture promotes efficient resource utilization. Precision technologies, such as precision irrigation and variable rate application, enable targeted delivery of water, fertilizers, and pesticides, reducing waste and minimizing environmental impacts.
</li>
        <li>
          <strong>Sustainability: </strong>Modern agriculture integrates sustainable practices, including conservation tillage, organic farming, and agroforestry, to minimize soil erosion, conserve water, and preserve biodiversity. It aims to reduce the ecological footprint of farming and protect natural resources for future generations.
</li>
      
      </ul>
       </div>}
       
 
 
       
 
       </div>
    </div>
  );
};

export default Read_More5;