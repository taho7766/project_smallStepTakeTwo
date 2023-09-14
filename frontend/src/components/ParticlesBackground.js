import React, { useCallback, useImperativeHandle, useRef } from "react";
import Particles from "react-tsparticles";
import { loadExternalTrailInteraction } from "tsparticles-interaction-external-trail";
import { loadAbsorbersPlugin } from "tsparticles-plugin-absorbers";
import { loadFull } from "tsparticles";
import '../assets/css/Particles.css';

const ParticlesBackground = React.forwardRef((props, ref) => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
        await loadExternalTrailInteraction(engine);
        await loadAbsorbersPlugin(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container.plugins);
    }, []);

    const particlesContainer = useRef(null);
    

    
    const handleLinkClick = () => {
        if (particlesContainer.current) {
            console.log("first conditional passed.");
    
            const containerInstance = particlesContainer.current.state.library;
    
            if (containerInstance && containerInstance.plugins) {
                console.log("Dumping plugin structures:");
            } else {
                console.log("containerInstance or containerInstance.plugins is undefined.");
            }
        } else {
            console.log("particlesContainer.current is undefined.");
        }
    };
    
    
    
    
    
    
    

    useImperativeHandle(ref, () => ({
        handleLinkClick: handleLinkClick
    }));

    return (
        <Particles
            ref={particlesContainer}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 90,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "trail",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        trail: {
                            quantity: 1,
                            delay: 0.01,
                            pauseOnStop: true,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.7,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                        },
                        value: 800,
                    },
                    opacity: {
                        value: "random",
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: {
                            min: 0.2,
                            max: 1,
                        },
                    },
                },
                absorbers: {
                    // You can keep this empty or add default absorber configurations here
                },
            }}
        />
    );
});

export default ParticlesBackground;
