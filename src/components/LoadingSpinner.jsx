import React from "react";
import { ping } from "ldrs";
const LoadingSpinner = () => {
  ping.register();
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white z-10 flex items-center justify-center">
      <l-ping size="100" speed="2" color="#3B25C1"></l-ping>
    </div>
  );
};

export default LoadingSpinner;

// Default values shown
