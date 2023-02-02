import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/projectSection";
import CertificateSection from "../components/certificateSection";
import AboutSection from "../components/aboutSection";
import FooterSection from "../components/footerSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <ProjectSection />
      <CertificateSection />
      <AboutSection />
      <FooterSection />
    </>
  );
};

export default Home;
