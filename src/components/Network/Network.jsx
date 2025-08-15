import React from 'react';
import CoreCompetencies from './CoreCompetencies';
import FAQSection from './FAQSection';
import PrimarySection from './PrimarySection';
import Assist from './Assist';
import CTA from './cta';

export default function Network() {
  return (
    <>
      <PrimarySection />
      <Assist />
      <CoreCompetencies />
      <FAQSection />
      <CTA />
    </>
  );
}
