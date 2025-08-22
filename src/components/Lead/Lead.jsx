import React from 'react';
import CTA from '../Network/cta';
import AdvantagesSection from './AdvantagesSection';
import PrimarySection from './PrimarySection';
import ImpactingBrands from './ImpactingBrands';

export default function Lead() {
  return (
    <>
      <PrimarySection />
      <AdvantagesSection />
      <ImpactingBrands />
      <CTA />
    </>
  );
}
