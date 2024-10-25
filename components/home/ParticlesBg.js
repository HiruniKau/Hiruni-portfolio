"use client"
import React, {useCallback} from "react";
import {loadFull} from "tsparticles";
import Particles from "react-tsparticles";
import {ParticlesConfig} from "../config/particles.config";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        id='tsparticles'
        options={ParticlesConfig}
        loaded={particlesLoaded}
        height='100vh'
        width='100vh'
        init={particlesInit}
        particlesLoaded='particlesLoaded'
      ></Particles>
    </>
  );
};

export default ParticlesBg;
