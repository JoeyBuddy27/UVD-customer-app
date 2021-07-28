import React, { useState } from "react";
import "./Van.css";

const Van = () => {
  const [currentDriver, setCurrentDriver] = useState("");

  const changeDriver = (driver) => {
    setCurrentDriver(driver);
    console.log(currentDriver);
  };

  return (
    <div className="van">
      <h1>LIVE VIEW</h1>
      <h3>
        Enter your engineer's first name in the box to see the relevant Van
        tracking
      </h3>
      <p>
        You can check your assigned engineer via the emails you have received
        from us
      </p>
      {/* <div className="engineer-buttons">
        <h6 onClick={() => changeDriver("bogdan")}>Bogdan</h6>
        <h6 onClick={() => changeDriver("habeeb")}>Habeeb</h6>
      </div> */}
      <input
        type="text"
        value={currentDriver}
        onChange={(e) => setCurrentDriver(e.target.value.toLowerCase())}
      />
      <div className="video-section">
        {currentDriver === "bogdan" && (
          <iframe
            class="YT-frame"
            src="https://www.youtube.com/embed/live_stream?channel=UCcHLTLno8dXs5yJ3HA0FeaQ&?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
        {/* Put new iframe link here for Van 2 */}
        {currentDriver === "habeeb" && (
          <iframe
            class="YT-frame"
            src="https://www.youtube.com/embed/live_stream?channel=UCcHLTLno8dXs5yJ3HA0FeaQ&?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Van;
