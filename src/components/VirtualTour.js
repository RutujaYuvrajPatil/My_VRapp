// src/components/VirtualTour.js
import React from 'react';
import 'aframe';
import beachImage from './beach.jpg';

const VirtualTour = () => {
  return (
    <a-scene>
      <a-sky src={beachImage} rotation="0 -90 0"></a-sky>
      <a-text value="Welcome to the Virtual Tour" position="-2 2.5 -3" color="white"></a-text>
      {/* Add more VR content as needed */}
    </a-scene>
  );
};

export default VirtualTour;
