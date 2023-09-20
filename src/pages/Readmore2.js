import React from "react";
import '../styles/Readmore2.css';
import { useState } from "react";
function Readmore2() {
  const[showState1, setShowState1] = useState(false);
  return (
    <div>
      <div className="R2">
        <h1>SOIL MAKING AND CARGO</h1>
      </div>
      <div className="R2_1">
        <img src="Read2.png" alt="" width="800px" height="400px"></img>
        <div className="R2_2">
          <p>
            "Welcome to the wonderful world of gardening! Whether you're a seasoned gardener or just starting out, understanding the importance of soil preparation and having the right tools and equipment, or 'cargo', is key to nurturing thriving plants.
          </p>
        </div>
      </div>
      <div className="R2_3">
        <h2>
          <button className="btn4" onClick={() => setShowState1(!showState1)}>STEPS</button>
        </h2>
      </div>
      {showState1 && (
        <div className="R2_4">
          <div className="card2">
            <h3>Soil Making</h3>
            <p>
              Creating healthy soil is the cornerstone of successful gardening. By following a few simple steps, you can ensure your plants receive the ideal environment to flourish.
            </p>
            <ul>
              <li>Begin by clearing the garden area of weeds and debris, providing a clean canvas for your plants to grow.</li>
              <li>Loosen the soil using a garden fork or tiller, allowing roots to penetrate easily and promoting nutrient absorption.</li>
              <li>Enhance the soil's fertility and structure by incorporating organic matter like compost, manure, or leaf mold. This enriches the soil with essential nutrients and improves moisture retention.</li>
              <li>Test the soil's pH level using a soil testing kit and adjust it, if necessary, by adding soil amendments like lime or sulfur. This helps create an optimal pH range for your specific plants.</li>
              <li>Finally, apply a layer of organic mulch on the soil surface. Mulching prevents weed growth, conserves moisture, and regulates soil temperature.</li>
            </ul>
            <p>By taking these steps, you'll be nurturing a nutrient-rich, well-drained soil that provides a solid foundation for your plants' growth.</p>
          </div>
          <div className="card2">
            <h3>Cargo in Gardening</h3>
            <p>
              Equipping yourself with the right tools and equipment, or 'cargo', ensures a smooth gardening experience. Here are some essential items you'll need:
            </p>
            <ul>
              <li>Garden Tools: A trusty set of tools such as a spade, garden fork, rake, hoe, and pruning shears are indispensable for various gardening tasks, from preparing the soil to maintaining and harvesting your plants.</li>
              <li>Watering Equipment: A watering can or hose with a spray nozzle becomes your best friend in providing your plants with the hydration they need. Consider investing in a watering system to ensure efficient water distribution.</li>
              <li>Plant Containers: Whether you're growing plants in pots, planters, or raised beds, having suitable containers allows for gardening in limited spaces or creating specific growing conditions.</li>
              <li>Gardening Gloves: Protect your hands from blisters, cuts, and soil-borne contaminants with a pair of comfortable and durable gardening gloves. They provide essential hand safety during various gardening activities.</li>
              <li>Pruning and Trellising Materials: Depending on the types of plants you grow, pruning shears, trellises, stakes, and ties help support and train your plants, ensuring optimal growth and productivity.</li>
            </ul>
          </div>
          <div className="para2">
          <p>We hope this brief introduction to soil making and the essential cargo in gardening sets you on a path to a bountiful and enjoyable gardening journey. Remember, the key is to nurture your soil and arm yourself with the right tools to cultivate a thriving garden. Happy gardening!"</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Readmore2;