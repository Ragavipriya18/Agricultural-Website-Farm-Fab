import React, { useState } from 'react';
import '../styles/Read_More2.css'; // Import the CSS file for the component

const Read_More2= () => {

    const [showVertical, setShowVertical] = useState(false);
  return (
    <div className="read-more-container2">
        <img src='vertical.jpg' alt='' width="300px" height="300px"></img>
        <div className='vertical1'>
      <h1 className="read-more-title2">VERTICAL FARMING</h1>
      
      <p className="read-more-content2">
      Vertical farming is a space-efficient agricultural practice that involves growing plants in vertically stacked layers or vertically inclined surfaces, such as walls or shelves. It is a method of cultivation that maximizes the use of available space by utilizing vertical space rather than traditional horizontal fields.

In vertical farming, plants are typically grown indoors or in controlled environments, such as greenhouses or specially designed structures. This allows for precise control of environmental factors such as temperature, humidity, lighting, and nutrient delivery. Artificial lighting, such as LED grow lights, is often used to provide the necessary light energy for plant growth.
      </p>
      <div className='btnclass2'>
      <button className='btn14' onClick={()=>setShowVertical(!showVertical)}>TYPES & ADVANTAGES</button>
      {/*<button className='btn15' onClick={()=>setShowVertical(!showVertical)}>ADVANTAGES</button>*/}
      </div>
      {showVertical && <div className='verticaltypes'>
        
      <ul>
        <li>
          <strong>Tower Farms:</strong> Plants are grown in vertical towers or columns that are equipped with hydroponic or aeroponic systems. This type maximizes space utilization and offers efficient water and nutrient delivery.
        </li>
        <li>
          <strong>Indoor Vertical Farms:</strong> Entire buildings or dedicated indoor spaces are converted into vertical farming facilities. These farms use advanced technologies like artificial lighting, climate control systems, and automated processes for optimized plant growth.
        </li>
        <li>
          <strong>Green Walls or Living Walls:</strong> Vertical structures, such as walls or facades, are covered with vegetation using hydroponic or soil-based systems. This type is often used for ornamental plants, urban greening, and improving air quality in urban areas.
        </li>
      </ul>
        </div>}
        {showVertical && <div className='verticaladv'>
        <ul>
        <li>
          <strong>Maximized Space Utilization:</strong> Vertical farming allows for the efficient use of limited space, making it suitable for urban environments and areas with land scarcity.
        </li>
        <li>
          <strong>Year-Round Cultivation:</strong> By controlling environmental factors such as temperature, humidity, and lighting, vertical farming enables year-round crop production, independent of seasonal changes.
        </li>
        <li>
          <strong>Reduced Resource Consumption:</strong> Vertical farming can reduce water usage by recycling and reusing water in closed-loop systems. It also requires fewer pesticides and fertilizers compared to traditional farming methods.
        </li>
        <li>
          <strong>Decreased Food Transportation:</strong> Vertical farms located in urban areas can reduce the need for long-distance transportation of produce, contributing to lower carbon emissions and fresher food for local communities.
        </li>
        <li>
          <strong>Enhanced Food Security:</strong> Vertical farming offers a more resilient food production system by minimizing the dependence on external factors like climate and seasonality. It can provide a consistent and locally grown food supply.
        </li>
      </ul>
       </div>}
      </div>
    </div>
  );
};

export default Read_More2;