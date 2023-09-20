import React, { useState } from 'react';
import '../styles/Read_More4.css'; // Import the CSS file for the component

const Read_More4= () => {

    const [showPre, setShowPre] = useState(false);
  return (
    <div className="read-more-container4">
        <img src='pre.jpg' alt='' width="300px" height="300px"></img>
        <div className='pre1'>
      <h1 className="read-more-title4">PRECISION AGRICULTURE</h1>
      
      <p className="read-more-content4">
      Precision agriculture, also known as precision farming or site-specific farming, refers to the use of advanced technologies and data-driven approaches to optimize agricultural practices at a fine-scale level. It involves the integration of various technologies, such as Global Positioning System (GPS), Geographic Information System (GIS), remote sensing, and data analytics, to collect, analyze, and utilize precise information about soil conditions, weather patterns, crop health, and other relevant factors.

The goal of precision agriculture is to enhance crop productivity, optimize resource utilization, minimize environmental impacts, and improve overall farm management.  </p>
      <div className='btnclass4'>
      <button className='btn18' onClick={()=>setShowPre(!showPre)}>TYPES & ADVANTAGES</button>
      {/*<button className='btn19' onClick={()=>setShowPre(!showPre)}>ADVANTAGES</button>*/}
      </div>
      {showPre && <div className='pretypes'>
        
      <ul>
        <li>
          <strong>  Variable Rate Technology (VRT):</strong>  Adjusting input application rates, such as fertilizers, pesticides, or irrigation, based on specific field conditions and crop requirements.
 </li>
        <li>
          <strong>Remote Sensing and Imaging:</strong> Using aerial or satellite imagery, as well as sensors, to monitor and analyze various crop and field characteristics, such as vegetation indices, thermal imaging, and multispectral analysis.</li>
<li>
          <strong>Global Positioning System (GPS) and Guidance Systems:</strong>Utilizing GPS technology and precision navigation to precisely guide agricultural machinery during operations, ensuring accuracy and reducing overlap.
</li>
 <li>
          <strong>Yield Monitoring:</strong>Collecting data on crop yield variations across the field, allowing farmers to identify areas of high or low productivity and make informed management decisions.
</li>
      </ul>
        </div>}
       

     {showPre && <div className='preadv'>
        <ul>
        <li>
          <strong> Enhanced Crop Yields:</strong>Precision agriculture allows farmers to optimize their agricultural practices by tailoring inputs, such as fertilizers, pesticides, and irrigation, to meet specific crop requirements. This targeted approach helps maximize crop yields and quality, leading to increased productivity and profitability.
</li>
        <li>
          <strong>Resource Efficiency:</strong>By precisely applying inputs based on site-specific needs, precision agriculture minimizes resource wastage. It helps optimize the use of fertilizers, pesticides, and water, reducing costs and minimizing environmental impacts associated with excessive use or runoff.
</li>
        <li>
          <strong>Environmental Sustainability:</strong>Precision agriculture enables more sustainable farming practices by minimizing the use of chemicals and reducing nutrient runoff, which can lead to water pollution. By optimizing resource utilization and reducing environmental impacts, it contributes to the conservation of natural resources and promotes environmental stewardship.
 </li>
      
      </ul>
       </div>}
       
 
       
 
       </div>
    </div>
  );
};

export default Read_More4;