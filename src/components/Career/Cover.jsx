import React, { useEffect, useState } from 'react';
import headerImage from "../../assets/Career.jpg"; // ← adjust path/case to match your folder
import "../../styles/Career/Cover.css";

export default function Cover() {
  const [animHead, setAnimHead] = useState(false);
  const [animSub, setAnimSub] = useState(false);
  const [animDesc, setAnimDesc] = useState(false);

  useEffect(() => {
    setAnimHead(true);
    const t1 = setTimeout(() => setAnimSub(true), 300);
    const t2 = setTimeout(() => setAnimDesc(true), 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      className="cover-section"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="cover-overlay" />

      <h1 className={`cover-headline ${animHead ? "cover--slide-in-left" : ""}`}>
        Let's THRIVE Together
      </h1>

      <h2 className={`cover-subhead ${animSub ? "cover--slide-in-right" : ""}`}>
        Be a part of our dynamic ecosystem
      </h2>

      <p className={`cover-desc ${animDesc ? "cover--slide-up" : ""}`}>
        If you’re ready to make an impact, fill out the form below and join our
        team
      </p>
    </div>
  );
}
