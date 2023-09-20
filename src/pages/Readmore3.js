import React from "react";
import '../styles/Readmore3.css';
import { useState } from "react";
function Readmore3() {
  const [showState2, setShowState2] = useState(false);
  return (
    <div>
      <div className="R3">
        <h1>PLANTING PLANTS</h1>
      </div>
      <div className="R3_1">
        <img src="Read3.png" alt="" width="800px" height="400px"></img>
        <div className="R3_2">
          <p>
            Welcome to the wonderful world of planting in gardening! Whether you're a seasoned green thumb or just starting out, planting is an exciting and fulfilling part of the gardening process.
          </p>
        </div>
      </div>
      <div className="R3_3">
        <h2>
          <button className="btn5" onClick={() => setShowState2(!showState2)}>STEPS</button>
        </h2>
      </div>
      {showState2 && (
        <div className="R3_4">
          <div className="card3">
            <h3>Selecting the Right Plants</h3>
            <p>
              Choosing the right plants for your garden is crucial. Consider factors such as your local climate, sunlight availability, soil conditions, and personal preferences. Whether you opt for colorful flowers, aromatic herbs, or delicious vegetables, selecting plants that thrive in your specific environment sets the stage for success.
            </p>
          </div>
          <div className="card3">
            <h3>Planning and Designing</h3>
            <p>
              Take some time to plan and design your garden. Consider the layout, spacing, and arrangement of plants to create an aesthetically pleasing and functional space. Take into account the growth habits and mature sizes of your chosen plants to ensure they have enough room to flourish.
            </p>
          </div>
          <div className="card3">
            <h3>Preparing the Planting Area</h3>
            <p>
              Prepare the planting area by clearing any weeds, rocks, or debris. Loosen the soil using a garden fork or tiller to provide a loose and fertile bed for your plants. Consider adding organic matter or compost to enrich the soil with nutrients and improve its texture.
            </p>
          </div>
          <div className="card3">
            <h3>Digging the Planting Holes</h3>
            <p>
              Dig planting holes that are deep and wide enough to accommodate the root systems of your plants. Gently remove the plants from their containers, loosen the roots, and place them in the holes. Ensure the plants are positioned at the correct depth, with the top of the root ball level with the soil surface.
            </p>
          </div>
          <div className="card3">
            <h3>Backfilling and Watering</h3>
            <p>
              Fill the planting holes with soil, gently firming it around the roots to eliminate air pockets. Water the newly planted plants thoroughly to help settle the soil and provide initial hydration. Watering is crucial during the establishment period, so ensure your plants receive adequate moisture as they adjust to their new environment.
            </p>
          </div>
          <div className="card3">
            <h3>Mulching and Maintenance</h3>
            <p>
              Apply a layer of organic mulch around the base of your plants. Mulch helps retain moisture, suppress weeds, and regulate soil temperature. Additionally, it adds an attractive finish to your garden. Regularly monitor your plants, provide appropriate care such as watering, fertilizing, and pruning as needed to promote healthy growth.
            </p>
          </div>
          <div className="para3">
            <p>
              Each plant has its own specific needs, so research and understand the requirements of the plants you choose to ensure their optimal growth. Enjoy the process of watching your plants thrive and transform your garden into a beautiful, vibrant oasis. Happy planting and may your garden flourish with beauty and abundance!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Readmore3;