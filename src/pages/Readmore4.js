import React from "react";
import "../styles/Readmore4.css";
import { useState } from "react";

function Readmore4() {
  const [showState2, setShowState2] = useState(false);

  return (
    <div>
      <div className="R4">
        <h1>NEW PLANT SEEDS</h1>
      </div>
      <div className="R4_1">
        <img src="Read4.jpg" alt="" width="800px" height="400px" />
        <div className="R4_2">
          <p>
            Welcome to the wonderful world of planting in gardening! Whether
            you're a seasoned green thumb or just starting out, planting is an
            exciting and fulfilling part of the gardening process.
          </p>
        </div>
      </div>
      <div className="R4_3">
        <h2>
          <button className="btn6" onClick={() => setShowState2(!showState2)}>
            STEPS
          </button>
        </h2>
      </div>
      {showState2 && (
        <div className="R4_4">
          <div className="card4">
            <h3>Rainbow Cosmos Blend</h3>
            <p>
              Add a burst of color to your garden with our Rainbow Cosmos Blend.
              This mix of cosmos varieties features a stunning array of vibrant
              hues, from deep purples and fiery oranges to soft pinks and sunny
              yellows. The tall, graceful flowers will attract butterflies and
              bees, creating a lively and enchanting space.
            </p>
          </div>
          <div className="card4">
            <h3>Petite Patio Tomatoes</h3>
            <p>
              Perfect for urban gardens or limited space, our Petite Patio
              Tomato seeds yield compact plants that are loaded with flavorful
              cherry tomatoes. These miniature marvels can be grown in
              containers or small garden beds, bringing the joy of homegrown
              tomatoes to any setting.
            </p>
          </div>
          <div className="card4">
            <h3>Fragrant Moonflower</h3>
            <p>
              Create an enchanting evening garden with our Fragrant Moonflower
              seeds. These fast-growing vines produce large, white flowers that
              unfurl at dusk, releasing a delightful fragrance into the night
              air. The blooms attract moths and other nighttime pollinators,
              making your garden come alive after the sun sets.
            </p>
          </div>
          <div className="card4">
            <h3>Butterfly Haven Wildflower Mix</h3>
            <p>
              Transform your outdoor space into a haven for butterflies with our
              Butterfly Haven Wildflower Mix. This carefully curated blend
              contains a variety of native wildflowers that provide nectar and
              habitat for butterflies throughout their life cycle. Watch in awe
              as your garden becomes a fluttering paradise.
            </p>
          </div>
          <div className="card4">
            <h3>Exotic Thai Basil</h3>
            <p>
              Spice up your culinary adventures with our Exotic Thai Basil
              seeds. Known for its strong, aromatic flavor, Thai Basil adds a
              distinctive twist to your dishes. The purple-tinged leaves and
              delicate flowers also make it an attractive addition to any herb
              garden.
            </p>
          </div>
          <div className="card4">
            <h3>Majestic Sunflower Mix</h3>
            <p>
              Bring the sunshine into your garden with our Majestic Sunflower
              Mix. This blend features a range of sunflower varieties, including
              tall, branching ones with multiple blooms and dwarf varieties
              perfect for borders. Witness the beauty of these iconic flowers
              as they turn their faces towards the sun.
            </p>
          </div>
          <div className="card4">
            <h3>Blissful Bee Balm</h3>
            <p>
              Attract pollinators to your garden with our Blissful Bee Balm
              seeds. This native perennial produces vibrant, showy flowers in
              shades of red, pink, and purple. The aromatic foliage and
              nectar-rich blooms will entice bees, hummingbirds, and butterflies,
              adding a lively buzz to your outdoor space.
            </p>
          </div>
          <div className="card4">
            <h3>Dwarf French Marigold Mix</h3>
            <p>
              Add a pop of color and pest-repelling properties to your garden
              with our Dwarf French Marigold Mix. These compact marigold plants
              feature an array of bright, cheerful flowers in various shades of
              yellow, orange, and red. Their strong scent helps deter pests,
              making them a popular choice for companion planting.
            </p>
          </div>
          <div className="para4">
          <p>
            Remember, each seed packet comes with detailed planting instructions
            and tips to help you achieve the best results.
          </p>
          <p>
            Happy gardening and may your new plant seeds flourish into a
            blooming paradise!
          </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Readmore4;