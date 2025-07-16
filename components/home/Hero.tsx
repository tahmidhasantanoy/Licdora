import React from 'react';

const Hero = () => {
    return (
        <>

<div className="w-full h-auto">
  <svg
    viewBox="0 0 500 125"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="darkred" stopOpacity="1" />
        <stop offset="25%" stopColor="#8B0000" stopOpacity="1" />
        <stop offset="60%" stopColor="#2B0000" stopOpacity="1" />
        <stop offset="100%" stopColor="black" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path d="M0,50 Q250,0 500,50 L500,125 L0,125 Z" fill="url(#grad1)" />
  </svg>
</div>

        </>
    );
};

export default Hero;