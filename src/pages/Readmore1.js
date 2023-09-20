import React from "react";
import '../styles/Readmore1.css';
import { useState } from "react";
function Readmore1() {
  const [showState, setShowState] = useState(false);
  return (
    <div>
      <div className="R1">
        <h1>GARDEN LANDSCAPING</h1>
      </div>
      <div className="R1_1">
        <img src="Read1.png" alt="" width="800px" height="400px"></img>
        <div className="R1_2">
          <p>
            Welcome to our garden landscaping section, where we offer tips and inspiration for creating beautiful and functional gardens. Whether you have a small backyard or a vast expanse of land, our landscaping ideas can help you transform your outdoor space into a lush and inviting garden.
          </p>
        </div>
      </div>
      <div className="R1_3">
        <h2>
          <button className="btn3" onClick={() => setShowState(!showState)}>
            STEPS
          </button>
        </h2>
      </div>
      {showState && (
        <div className="R1_4">
          <div className="card1">
            <h3>1. Designing Your Garden</h3>
            <p>
              A well-planned garden layout is essential for an aesthetically pleasing and organized space. Consider the following elements when designing your garden:
            </p>
            <ul>
              <li>Choosing the right plants based on your climate and soil conditions.</li>
              <li>Creating focal points such as garden beds, pathways, or water features.</li>
              <li>Using elements like hedges, fences, or trellises for privacy and boundary definition.</li>
            </ul>
          </div>
          <div className="card1">
            <h3>2. Incorporating Functional Areas</h3>
            <p>
              A garden can serve multiple purposes beyond visual appeal. Here are some ideas for incorporating functional areas into your garden:
            </p>
            <ul>
              <li>Vegetable and herb gardens for homegrown produce.</li>
              <li>A seating area or outdoor dining space for relaxation and entertainment.</li>
              <li>A play area for children or pets.</li>
            </ul>
          </div>
          <div className="card1">
            <h3>3. Choosing the Right Landscaping Features</h3>
            <p>
              Enhance the beauty and functionality of your garden with appropriate landscaping features:
            </p>
            <ul>
              <li>Water features such as ponds, fountains, or waterfalls.</li>
              <li>Lighting options for highlighting specific garden areas and extending the usability of the garden during evenings.</li>
              <li>Paths and walkways to guide visitors through the garden and create a sense of exploration.</li>
            </ul>
          </div>
          <div className="card1">
            <h3>4. Maintenance and Sustainability</h3>
            <p>
              Maintaining a garden requires ongoing care and attention. Consider the following practices for sustainable garden maintenance:
            </p>
            <ul>
              <li>Proper watering techniques to conserve water and prevent wastage.</li>
              <li>Using organic fertilizers and pest control methods to promote healthy plant growth.</li>
              <li>Regular pruning, weeding, and mulching to keep the garden neat and tidy.</li>
            </ul>
          </div>
          <div className="para1">
            <p>
              Remember, gardening is a creative and enjoyable endeavor. Don't be afraid to experiment, add your personal touch, and adapt the ideas to suit your specific needs and preferences. Happy gardening!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Readmore1;