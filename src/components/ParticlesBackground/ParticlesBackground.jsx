import { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import particleConfig from "./particlesConfig";
const ParticlesBackground = () => {
  const loadParticles = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        // background: {
        //   color: {
        //     value: "#000",
        //   },
        // },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 60, // 200 default
              duration: 0.2, // 0.4 default
              speed: 0.4,
              maxSpeed: 0.4,
            },
            bounce: {
              distance: 200, // 200 default
              duration: 0.4, // 0.4 default
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.6,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
              onHover: "repulse",
            },
            maxSpeed: 0.35,
            random: false,
            speed: 0.3, // 1.8
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1200, // 800
            },
            value: 40, // 80
          },
          opacity: {
            value: 0.1,
          },
          shape: {
            type: "",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
