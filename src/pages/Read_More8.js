import React, { useState } from 'react';
import '../styles/Read_More8.css'; // Import the CSS file for the component

const Read_More8= () => {

    const [showSus, setShowSus] = useState(false);
  return (
    <div className="read-more-container8">
        <img src='sus.jpg' alt='' width="300px" height="300px"></img>
        <div className='sus1'>
      <h1 className="read-more-title8">SUBSISTENCE FARMING</h1>
      
      <p className="read-more-content8">
      Subsistence farming is an agricultural practice in which farmers primarily produce food and other necessities for their own consumption and the immediate needs of their families or local communities. In subsistence farming, the focus is on sustaining livelihoods rather than generating surplus for commercial purposes. It typically involves small-scale agricultural operations, often relying on traditional techniques and limited use of external inputs.

In subsistence farming, farmers cultivate a variety of crops and raise livestock to meet their basic food requirements and fulfill other essential needs. 
        </p>
      <div className='btnclass8'>
      <button className='btn26' onClick={()=>setShowSus(!showSus)}>TYPES & ADVANTAGES</button>
      {/*<button className='btn27' onClick={()=>setShowSus(!showSus)}>ADVANTAGES</button>*/}
      </div>
      {showSus && <div className='sustypes'>
        
      <ul>
        <li>
          <strong>  Shifting Agriculture: </strong>Also known as slash-and-burn or swidden farming, this practice involves clearing land by cutting down vegetation and burning it. The cleared land is then used for cultivating crops for a few years until the soil fertility declines, after which the farmers move to a new plot and repeat the process.
</li>
        <li>
          <strong>Intensive Subsistence Farming:</strong>Predominant in densely populated regions, this type of farming involves cultivating small land plots intensively to maximize crop production for household consumption. Farmers typically employ manual labor, traditional tools, and sometimes draft animals for cultivation.
</li>
<li>
          <strong> Nomadic Herding:</strong>Practiced by pastoralist communities, nomadic herding involves the seasonal movement of livestock to access grazing lands. Herders rely on the natural forage available in different regions, and the livestock products, such as milk, meat, and wool, meet their subsistence needs.
 
</li>

     </ul>
        </div>}
        
 
 
     {showSus && <div className='susadv'>
        <ul>
        <li>
          <strong>  Food Security:</strong> Subsistence farming ensures a relatively reliable and direct food source for farming households. By cultivating a diverse range of crops and raising livestock, subsistence farmers can meet their basic food needs and reduce dependence on external food sources. This helps in mitigating the risks of food scarcity and provides a degree of self-sufficiency.

</li>
        <li>
          <strong>Local and Cultural Preservation: </strong>Subsistence farming often relies on traditional agricultural practices that have been passed down through generations. By practicing subsistence farming, communities can preserve their cultural heritage, traditional knowledge, and farming techniques. This contributes to the maintenance of local identities and the preservation of indigenous agricultural systems.
</li>
        <li>
          <strong>Cost Savings:</strong>Subsistence farming typically relies on traditional tools, manual labor, and minimal external inputs. This reduces the need for expensive machinery, synthetic fertilizers, and pesticides, leading to cost savings for farming households. Subsistence farmers often reuse seeds and organic waste, reducing the need for purchasing inputs from the market.
 </li>
      
      </ul>
       </div>}
       
        
       
 
 
      

 
       </div>
    </div>
  );
};

export default Read_More8;