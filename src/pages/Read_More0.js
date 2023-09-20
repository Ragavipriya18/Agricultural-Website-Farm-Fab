import React, { useState } from 'react';
import '../styles/Read_More0.css'; // Import the CSS file for the component

const Read_More0 = () => {

    const [showHydro, setShowHydro] = useState(false);
  return (
    <div className="read-more-container">
        <img src='hydro.jpg' alt='' width="300px" height="300px"></img>
        <div className='hydro1'>
      <h1 className="read-more-title">HYDROPONICS</h1>
      
      <p className="read-more-content">
        Hydroponics is a method of growing plants without soil, where plants are instead grown in a nutrient-rich water solution. It is a form of soilless cultivation that provides plants with the necessary nutrients directly in the water, allowing them to grow in a controlled environment.

        In hydroponic systems, plants are typically grown in containers or trays filled with an inert medium like perlite, vermiculite, rockwool, or coconut coir to support the plant roots. The nutrient solution, which contains a balanced mixture of essential nutrients, is then supplied to the plants in a controlled manner.
      </p>
      <div className='btnclass'>
      <button className='btn10' onClick={()=>setShowHydro(!showHydro)}>TYPES & ADVANTAGES</button>
      {/*<button className='btn11'>ADVANTAGES</button>*/}
      </div>
      {showHydro && <div className='hydrotypes'>
        
      <b>Deep Water Culture (DWC):</b> Plants are suspended in a nutrient solution, with the roots directly immersed in the water. Oxygen is supplied through air stones or diffusers to ensure adequate root oxygenation.<br/>

<b>Nutrient Film Technique (NFT):</b> A thin film of nutrient solution flows continuously over the roots, providing a constant supply of nutrients and oxygen. The excess solution is collected and recirculated.<br/>

<b>Ebb and Flow:</b> Plants are periodically flooded with the nutrient solution and then drained. This cycle allows the roots to absorb the necessary nutrients and oxygen.<br/>

<b>Drip Irrigation:</b> Nutrient solution is dripped directly onto the root zone of the plants through a network of tubes and emitters, ensuring precise delivery of water and nutrients.<br/>
        </div>}
        {showHydro && <div className='hydroadv'>
        <b>Improved control over nutrient delivery:</b> The nutrient solution can be precisely tailored to the needs of the plants, ensuring optimal nutrition and growth.<br/>

<b>Water efficiency: </b>Hydroponic systems typically use less water compared to traditional farming methods, as water is recirculated within the system.<br/>

<b>Space efficiency:</b> Hydroponics allows plants to be grown in a smaller area, making it suitable for urban or indoor farming.<br/>

<b>Reduced reliance on pesticides and herbicides: </b>With proper management, hydroponic systems can minimize the use of chemicals and create a more environmentally friendly growing environment.<br/>

<b>Faster growth and higher yields:</b> By providing optimal conditions for plant growth, hydroponics can result in faster growth rates and increased crop yields.</div>}
      </div>
    </div>
  );
};

export default Read_More0;