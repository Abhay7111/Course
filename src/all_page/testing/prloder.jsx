import React, { useState } from 'react';
import Preloader from './Preloader';

const prloder = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating some loading process
  setTimeout(() => {
    setIsLoading(false);
  }, 5000); // Adjust the time as needed

  return (
    <div className="prloder">
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          {/* Your main app content goes here */}
          <h1>Welcome to My prloder!</h1>
        </div>
      )}
    </div>
  );
};

export default prloder;
