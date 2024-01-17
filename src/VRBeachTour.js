// VRBeachTour.js
import React from 'react';
import { Entity, Scene } from 'aframe-react';

const VRBeachTour = () => {
  return (
    <Scene>
      {/* Sky */}
      <Entity
        geometry={{ primitive: 'sphere', radius: 100 }}
        material={{ color: '#87CEEB', shader: 'flat' }}
        scale={{ x: -1, y: 1, z: 1 }}
      />

      {/* Beach */}
      <Entity
        geometry={{ primitive: 'plane', width: 200, height: 200 }}
        material={{ src: 'beach.jpg' }}
        rotation={{ x: -90, y: 0, z: 0 }}
      />

      {/* Palm trees (you can add more objects) */}
      <Entity
        geometry={{ primitive: 'cylinder', radius: 1, height: 5 }}
        material={{ color: 'brown' }}
        position={{ x: 5, y: 2.5, z: -5 }}
      />
      <Entity
        geometry={{ primitive: 'cylinder', radius: 1, height: 5 }}
        material={{ color: 'brown' }}
        position={{ x: -5, y: 2.5, z: -5 }}
      />

      {/* Sun */}
      <Entity
        geometry={{ primitive: 'sphere', radius: 5 }}
        material={{ color: 'yellow' }}
        position={{ x: 20, y: 50, z: -20 }}
      />

      {/* User starting point */}
      <Entity camera look-controls wasd-controls position={{ x: 0, y: 1.6, z: 0 }}>
        <Entity cursor={{ fuse: false }} position={{ x: 0, y: 0, z: -1 }} />
      </Entity>
    </Scene>
  );
};

export default VRBeachTour;
