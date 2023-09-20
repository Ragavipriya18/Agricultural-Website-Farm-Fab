import React, { useState } from 'react';
import '../styles/Read_More7.css'; // Import the CSS file for the component

const Read_More7= () => {

    const [showCom, setShowCom] = useState(false);
  return (
    <div className="read-more-container7">
        <img src='com.jpg' alt='' width="300px" height="300px"></img>
        <div className='com1'>
      <h1 className="read-more-title7">COMMERCIAL FARMING</h1>
      
      <p className="read-more-content7">
      Commercial agriculture refers to large-scale agricultural production that focuses on generating profit by producing crops or raising livestock for sale in the market. It involves the cultivation of crops or rearing of animals on a commercial scale, typically using modern technologies, specialized equipment, and efficient production methods.

In commercial agriculture, the primary goal is to maximize productivity and economic returns. It often involves extensive land use, mechanization, and intensive management practices. Commercial farmers aim to meet the demands of the market, whether it be supplying food for consumers or producing raw materials for industries such as food processing or textile manufacturing.
        </p>
      <div className='btnclass7'>
      <button className='btn24' onClick={()=>setShowCom(!showCom)}>TYPES & ADVANTAGES</button>
     {/* <button className='btn25' onClick={()=>setShowCom(!showCom)}>ADVANTAGES</button>*/}
      </div>
      {showCom && <div className='comtypes'>
        
      <ul>
        <li>
          <strong> Arable Farming: </strong>Focuses on cultivating crops for food, feed, or industrial purposes. It includes the production of grains (such as wheat, rice, corn), oilseeds (such as soybeans, sunflowers), fiber crops (such as cotton), and other cash crops.
</li>
        <li>
          <strong>Livestock Farming:</strong>Specializes in raising animals for meat, dairy, eggs, or other animal products. This includes beef cattle farming, dairy farming, poultry farming (chickens, turkeys), pig farming, sheep farming, and goat farming.
</li>
<li>
          <strong>Dairy Farming:</strong>Concentrates on the production of milk and dairy products. Dairy farms typically maintain herds of cows or goats for milk production and may also engage in cheese making, butter production, or other dairy processing activities.

</li>
<li>
          <strong>Poultry Farming: </strong>Involves the intensive production of poultry, primarily chickens, for meat and eggs. It includes broiler chicken farming for meat production and layer chicken farming for egg production.
 </li>
     </ul>
        </div>}
        
 
 
     {showCom && <div className='comadv'>
        <ul>
        <li>
          <strong>Increased Food Production:</strong> Commercial agriculture operates on a large scale and utilizes advanced technologies, high-yielding varieties, and efficient production methods. This enables the production of larger quantities of food to meet the growing global demand, contributing to food security and reducing the risk of food shortages.

</li>
        <li>
          <strong>Economic Growth and Employment:</strong>Commercial agriculture plays a significant role in the economy by generating employment opportunities and contributing to rural development. Large-scale farming operations require a workforce for various tasks, including cultivation, harvesting, processing, distribution, and marketing. Additionally, commercial agriculture contributes to income generation, trade, and economic diversification in rural areas.
</li>
        <li>
          <strong>Market Stability and Supply Chain Efficiency:</strong>Commercial agriculture ensures a consistent supply of agricultural products to meet consumer demands. Large-scale production and efficient supply chains help stabilize prices, reduce market volatility, and improve the availability of agricultural commodities throughout the year.
 </li>
      
      </ul>
       </div>}
       
        
       
 
 
       
 
       </div>
    </div>
  );
};

export default Read_More7;