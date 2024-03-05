import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to showcase the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <div className={`preloader ${loading ? "active" : ""}`}>
      {/* Your preloader content goes here */}
      <div id="loop" class="prelodercenter"></div>
      <div id="bike-wrapper" class="prelodercenter">
        <div id="bike" class="centerBike"></div>
      </div>
    </div>
  );
};

export default Preloader;
