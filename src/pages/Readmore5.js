import React from "react";
import '../styles/Readmore5.css';
import { useState } from "react";

function Readmore5() {
  const [showState2, setShowState2] = useState(false);

  return (
    <div>
      <div className="R5">
        <h1>BUTTERFLY SOLUTION</h1>
      </div>
      <div className="R5_1">
        <img src="Read5.jpg" alt="" width="800px" height="400px" />
        <div className="R5_2">
          <p>
            Welcome to the wonderful world of planting in gardening! Whether
            you're a seasoned green thumb or just starting out, planting is an
            exciting and fulfilling part of the gardening process.
          </p>
        </div>
      </div>
      <div className="R5_3">
        <h2>
          <button className="btn7" onClick={() => setShowState2(!showState2)}>
            STEPS
          </button>
        </h2>
      </div>
      {showState2 && (
        <div className="R5_4">
          <div className="card5">
            <h3>Native Butterfly Garden Seeds</h3>
            <p>
              Our specially curated mix of native wildflower seeds is a perfect
              starting point for creating a butterfly-friendly garden. These
              flowers provide abundant nectar and host plants for caterpillars,
              attracting a wide variety of butterfly species. With a diverse
              selection of colors and bloom times, your garden will become a
              haven for these delicate creatures.
            </p>
          </div>
          <div className="card5">
            <h3>Butterfly Feeder</h3>
            <p>
              Our Butterfly Solution includes a butterfly feeder that provides a
              supplementary food source for adult butterflies. The feeder is
              designed to hold a solution of sugar water or a specially
              formulated butterfly nectar. Hang it in a sunny spot in your
              garden and watch as butterflies stop by to refuel and rest.
            </p>
          </div>
          <div className="card5">
            <h3>Butterfly Puddling Station</h3>
            <p>
              Butterflies often gather on moist soil or mud puddles to obtain
              essential minerals and nutrients. Our Butterfly Solution includes
              a puddling station that mimics this natural behavior. Simply fill
              the shallow dish with water and add some sand, rocks, or other
              materials for the butterflies to perch on. It's a fascinating
              sight to observe butterflies congregating and sipping water from
              your very own puddling station.
            </p>
          </div>
          <div className="card5">
            <h3>Educational Guidebook</h3>
            <p>
              We've included an informative guidebook with our Butterfly
              Solution, offering valuable insights into the lifecycle,
              behavior, and habitat preferences of butterflies. Learn about the
              plants they rely on, gardening techniques to support them, and
              tips for identifying different butterfly species. It's a great
              resource for both novice and experienced butterfly enthusiasts.
            </p>
          </div>
          <div className="card5">
            <h3>Butterfly Gardening Tips</h3>
            <p>
              Our Butterfly Solution package is accompanied by a set of
              practical tips and suggestions to help you optimize your garden
              for butterflies. Learn about the importance of providing a mix of
              sun and shade, creating sheltered spots, and incorporating
              different heights of plants to accommodate various butterfly
              species. Discover how to maintain a pesticide-free environment
              and adopt sustainable gardening practices that benefit butterflies
              and other pollinators.
            </p>
          </div>
          <div className="card5">
            <h3>Butterfly Identification Chart</h3>
            <p>
              Enhance your butterfly-watching experience with a colorful
              identification chart. This chart features common butterfly species
              in your region, helping you recognize and appreciate the different
              types that visit your garden. Use it as a reference to identify
              butterflies on the wing or as a tool to engage children and spark
              their curiosity about these remarkable insects.
            </p>
          </div>
          <div className="para5">
          <p>
            By investing in our Butterfly Solution, you not only create a
            stunning garden filled with vibrant flowers but also contribute to
            the conservation of butterflies and their delicate ecosystems.
          </p>
          <p>
            Watch as your garden transforms into a sanctuary for these graceful
            creatures, adding an enchanting touch to your outdoor space.
          </p>
        </div>
        </div>
      )}
    </div>
  );
}

export default Readmore5;