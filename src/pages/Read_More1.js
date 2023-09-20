import React, { useState } from 'react';
import '../styles/Read_More1.css'; // Import the CSS file for the component

const Read_More1= () => {

    const [showOrgan, setShowOrgan] = useState(false);
  return (
    <div className="read-more-container1">
        <img src='organ.jpg' alt='' width="300px" height="300px"></img>
        <div className='organ1'>
      <h1 className="read-more-title1">ORGAN FARMING</h1>
      
      <p className="read-more-content1">
      Organic farming is a sustainable agricultural practice that emphasizes natural methods, biodiversity, and producing organic food. It involves growing crops and raising livestock using techniques that avoid synthetic pesticides, fertilizers, genetically modified organisms (GMOs), and growth hormones.

In organic farming, the focus is on nurturing soil health and fertility through practices such as composting, crop rotation, cover cropping, and the use of organic amendments. Livestock in organic farming are typically raised in humane conditions, with access to outdoor areas and organic feed.
      </p>
      <div className='btnclass1'>
      <button className='btn12' onClick={()=>setShowOrgan(!showOrgan)}>TYPES & ADVANTAGES</button>
      {/*<button className='btn13' onClick={()=>setShowOrgan(!showOrgan)}>ADVANTAGES</button>*/}
      </div>
      {showOrgan && <div className='organtypes'>
        
      <ul>
  <li>
    <strong>Crop-based Organic Farming:</strong> This type focuses on cultivating organic crops using natural techniques like crop rotation, green manure, and biological pest control.
  </li>
  <li>
    <strong>Animal-based Organic Farming:</strong> This type involves raising organic livestock using practices that prioritize animal welfare, such as providing access to pasture and organic feed.
  </li>
  <li>
    <strong>Integrated Organic Farming:</strong> This approach combines both crop-based and animal-based organic farming methods to achieve a balanced and sustainable farming system.
  </li>
</ul>
        </div>}
        {showOrgan && <div className='organadv'>
        <ul>
  <li>
    <strong>Environmental Sustainability:</strong> Organic farming practices promote biodiversity, soil health, and water conservation. They reduce pollution by avoiding synthetic pesticides and fertilizers, protecting ecosystems and wildlife.
  </li>
  <li>
    <strong>Health Benefits:</strong> Organic food is free from synthetic chemicals and GMOs, making it healthier and safer for consumption. It may have higher nutrient levels and fewer pesticide residues.
  </li>
  <li>
    <strong>Soil Fertility and Long-Term Sustainability:</strong> Organic farming methods improve soil fertility through practices like composting, crop rotation, and the use of organic amendments. This ensures the long-term sustainability of agriculture.
  </li>
  <li>
    <strong>Support for Local Economy:</strong> Organic farming often emphasizes local production and distribution, supporting local farmers and communities. It fosters a more resilient and sustainable food system.
  </li>
</ul>
       </div>}
      </div>
    </div>
  );
};

export default Read_More1;