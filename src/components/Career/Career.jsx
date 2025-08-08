import React from "react";
import Cover from "./Cover";
import SkillsSection from "./SkillsSection";
import JobOpenings from "./JobOpenings";
import ContactSection from "./ContactSection";
import About from "./About";

export default function Career() {
  return (
    <>
      <Cover />
      <About />
      <SkillsSection />
      <JobOpenings />
      <ContactSection />
    </>
  );
}
