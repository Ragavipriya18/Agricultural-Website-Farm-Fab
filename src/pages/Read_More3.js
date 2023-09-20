import React, { useState } from 'react';
import '../styles/Read_More3.css'; // Import the CSS file for the component

const Read_More3= () => {

    const [showUrban, setShowUrban] = useState(false);
  return (
    <div className="read-more-container3">
        <img src='urban.jpg' alt='' width="300px" height="300px"></img>
        <div className='urban1'>
      <h1 className="read-more-title3">URBAN FARMING</h1>
      
      <p className="read-more-content3">
      Urban farming refers to the practice of cultivating, processing, and distributing food in or around urban areas. It involves growing crops, raising animals, and producing food products within cities or densely populated areas, often using innovative and space-efficient techniques.

Urban farming is driven by the desire to increase food security, promote sustainability, and enhance community well-being. It offers several benefits, including the reduction of food miles, which minimizes transportation-related emissions and supports local economies. Additionally, urban farming can contribute to the availability of fresh and nutritious produce in areas where access to healthy food is limited, promoting healthier diets and improving public health outcomes.
      </p>
      <div className='btnclass3'>
      <button className='btn16' onClick={()=>setShowUrban(!showUrban)}>TYPES & ADVANTAGES</button>
     {/* <button className='btn17' onClick={()=>setShowUrban(!showUrban)}>ADVANTAGES</button>*/}
      </div>
      {showUrban && <div className='urbantypes'>
        
      <ul>
        <li>
          <strong> Permaculture:</strong> Designing sustainable agricultural systems that mimic natural ecosystems, focusing on long-term stability and self-sufficiency.
        </li>
        <li>
          <strong>Mobile Farms:</strong>Utilizing movable structures such as food trucks or shipping containers for farming, bringing farms closer to urban areas and increasing accessibility. </li>
        <li>
          <strong>Green Walls or Living Walls:</strong>Covering vertical structures, such as walls or facades, with vegetation using hydroponic or soil-based systems for aesthetic purposes and environmental benefits.
 </li>
 <li>
          <strong>Edible Landscaping: </strong>Integrating edible plants into urban landscapes, such as fruit trees in public parks or herbs in decorative gardens.</li>
      </ul>
        </div>}
        

 

 

        {showUrban && <div className='urbanadv'>
        <ul>
        <li>
          <strong> Increased Food Security:</strong>Urban farming reduces dependence on distant food sources and enhances local food production, improving food security in urban areas. It helps communities have better access to fresh, nutritious, and locally grown food, particularly in areas with limited access to grocery stores or fresh produce.
 </li>
        <li>
          <strong>Environmental Sustainability:</strong>Urban farming promotes sustainable agriculture practices. By utilizing innovative techniques like vertical farming, hydroponics, and aquaponics, it maximizes land use efficiency, reduces water consumption, minimizes pesticide and fertilizer use, and decreases the carbon footprint associated with long-distance food transportation.
</li>
        <li>
          <strong>Enhanced Urban Resilience:</strong>Urban farming strengthens the resilience of cities by diversifying food production and reducing vulnerability to external disruptions. It contributes to a more decentralized food system, making cities more self-sufficient in times of emergencies, such as natural disasters or supply chain disruptions.
 </li>
      
      </ul>
       </div>}
       
 
       </div>
    </div>
  );
};

export default Read_More3;