import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "../config/particleConfig";
import { loadFull } from "tsparticles";

const ParticaleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleConfig}
    ></Particles>
  );
};

export default ParticaleBackground;
