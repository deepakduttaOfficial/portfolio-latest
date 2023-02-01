import React from "react";
import CertificateSection from "../components/certificateSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/projectSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <ProjectSection />
      <CertificateSection />
    </>
  );
};

export default Home;
