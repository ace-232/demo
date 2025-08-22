import React from 'react';
import Cover from './Cover';
import Industry from './Industry';
import Value from './Value';
import Features from './Features';
import VisionMission from './VisionMission';

export default function AboutUs() {
  return (
    <>
      <Cover />
      <VisionMission />
      <Industry />
      <Features />
      <Value />
    </>
  );
}
