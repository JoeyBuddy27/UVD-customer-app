import React from "react";
import "./Van.css";

const Van = () => {
  return (
    <div className="van">
      <h1>LIVE VIEW</h1>
      <iframe
        class="YT-frame"
        src="https://www.youtube.com/embed/live_stream?channel=UCcHLTLno8dXs5yJ3HA0FeaQ&?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Van;
