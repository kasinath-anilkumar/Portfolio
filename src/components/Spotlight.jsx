// Spotlight.jsx
import React from 'react';

const Spotlight = ({ fill = 'rgba(255, 255, 255, 0.2)', className = '' }) => {
  return (
    <div
      className={`spotlight-overlay ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: fill,
        zIndex: 999, // Ensure it is on top of other elements
        pointerEvents: 'none', // So it doesn't interfere with other interactions
      }}
    ></div>
  );
};

export default Spotlight;
