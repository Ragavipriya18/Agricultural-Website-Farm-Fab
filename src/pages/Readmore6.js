import React from "react";
import '../styles/Readmore6.css';
import { useState } from "react";

function Readmore6() {
  const [showState2, setShowState2] = useState(false);

  return (
    <div>
      <div className="R6">
        <h1>GARDEN TAKE CARE</h1>
      </div>
      <div className="R6_1">
        <img src="Read6.jpg" alt="" width="800px" height="400px" />
        <div className="R6_2">
          <p>
            Welcome to the wonderful world of planting in gardening! Whether
            you're a seasoned green thumb or just starting out, planting is an
            exciting and fulfilling part of the gardening process.
          </p>
        </div>
      </div>
      <div className="R6_3">
        <h2>
          <button
            className="btn8"
            onClick={() => setShowState2(!showState2)}
          >
            STEPS
          </button>
        </h2>
      </div>
      {showState2 && (
        <div className="R6_4">
          <div className="card6">
            <h3>Seasonal Planting Guide</h3>
            <p>
              Our comprehensive guide outlines the optimal times to plant
              various types of flowers, vegetables, and herbs in your region.
              It covers both cool-season and warm-season crops, helping you plan
              your garden throughout the year. Follow the planting guide to
              maximize growth and yield for your favorite plants.
            </p>
          </div>
          <div className="card6">
            <h3>Watering Schedule</h3>
            <p>
              Proper watering is crucial for maintaining a healthy garden. Our
              Garden Care package includes a watering schedule tailored to your
              specific climate and plants. It provides guidance on how often and
              how much water to apply, taking into account factors such as
              rainfall, soil type, and plant requirements. By following the
              watering schedule, you can avoid overwatering or underwatering,
              promoting strong root development and overall plant health.
            </p>
          </div>
          <div className="card6">
            <h3>Fertilization Guide</h3>
            <p>
              Nutrient-rich soil is vital for robust plant growth. Our Garden
              Care content offers a fertilization guide that explains the
              different types of fertilizers, their application methods, and the
              appropriate timing for feeding your plants. Whether you prefer
              organic or synthetic fertilizers, our guide will help you
              understand the nutrient needs of your plants and ensure they
              receive the proper nourishment.
            </p>
          </div>
          <div className="card6">
            <h3>Pruning and Trimming Tips</h3>
            <p>
              Pruning and trimming are essential for maintaining the shape,
              size, and overall health of your garden plants. Our Garden Care
              package provides step-by-step instructions on when and how to
              prune different types of plants, including trees, shrubs, and
              flowering perennials. Learn the techniques for removing dead or
              diseased branches, promoting proper airflow, and encouraging new
              growth.
            </p>
          </div>
          <div className="card6">
            <h3>Pest and Disease Management</h3>
            <p>
              Garden pests and diseases can wreak havoc on your plants if not
              addressed promptly. Our Garden Care content offers guidance on
              identifying common pests and diseases, along with effective
              organic and integrated pest management strategies to control them.
              From natural remedies to companion planting, you'll find practical
              solutions to keep your garden pest-free and thriving.
            </p>
          </div>
          <div className="card6">
            <h3>Weed Control Methods</h3>
            <p>
              Weeds compete with your desired plants for resources and can
              hinder their growth. Our Garden Care package includes information
              on different weed control methods, including manual removal,
              mulching, and herbicides. Discover the most efficient and
              environmentally friendly ways to keep weeds at bay, maintaining
              the beauty and health of your garden.
            </p>
          </div>
          <div className="card6">
            <h3>Garden Maintenance Checklist</h3>
            <p>
              To stay organized and ensure you don't miss any essential tasks,
              our Garden Care content provides a comprehensive maintenance
              checklist. It covers regular chores such as weeding, deadheading,
              checking for pests and diseases, monitoring watering needs, and
              general garden cleanup. By following the checklist, you'll
              maintain a well-groomed and healthy garden all year round.
            </p>
          </div>
          <div className="para6">
          <p>
            Remember, each garden is unique, so adapt our Garden Care package to
            suit your specific needs and preferences.
          </p>
          <p>
            With proper care and attention, your garden will flourish and
            provide you with a rewarding and enjoyable outdoor space.
          </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Readmore6;