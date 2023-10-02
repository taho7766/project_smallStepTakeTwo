import React, { useCallback, useEffect, useImperativeHandle, useState, useMemo, useRef } from "react";
import { useLocation} from "react-router-dom";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadExternalTrailInteraction } from "tsparticles-interaction-external-trail";
import { loadAbsorbersPlugin } from "tsparticles-plugin-absorbers";
import { loadFull } from "tsparticles";
import '../assets/css/Particles.css';



const ParticlesBackground = React.forwardRef((props, ref) => {
    
    const [isParticleLoaded, setIsParticleLoaded] = useState(false);
    
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
        await loadExternalTrailInteraction(engine);
        await loadAbsorbersPlugin(engine);
        console.trace(engine);
    }, []);

    const location = useLocation();
    const particlesContainer = useRef(null);
    const absorberRef = useRef(null);
    const absorberPlugin = useRef(null);
    const absorberInstance = useRef(null);

    const particlesLoaded = useCallback(async (container) => {  
        console.log(container);
        setIsParticleLoaded(true);
    }, []);

    const absorberOption = useMemo(() => ({
        distance: 40,
        color: '000000',
        size: {
          value: 100,
          density: 20,
          limit: 100,
        },
    }), []);
    
    const absorberPosition = useMemo(() => ({
        x: 50,
        y: 50,
    }), []);

    /*
    const addAbsorber = useCallback(() => {
        if (particlesContainer.current?.state?.library && absorberRef.current === null) {
            console.log(particlesContainer.current.state.library.plugins.get('absorbers'));//.addAbsorber(absorberOption,absorberPosition));
            //absorberRef.current = particlesContainer.current.state.addAbsorber(absorberOption, absorberPosition);
            console.log(particlesContainer.current);
            absorberPlugin.current = particlesContainer.current.state.library._engine.plugins.plugins[0];
            //console.log(absorberPlugin.current);
            absorberInstance.current = absorberPlugin.current.getPlugin(particlesContainer.current.state);
            //console.log(absorberInstance.current);
            //absorberRef.current = absorberInstance.current.addAbsorber(absorberOption, absorberPosition);
            //console.log(absorberPlugin.current.getPlugin(particlesContainer.current.state));
        }
    }, [absorberOption, absorberPosition, particlesContainer]);
    
    const removeAbsorber = useCallback(() => {
        console.log(particlesContainer.current);
        if (particlesContainer.current?.state?.library && absorberRef.current !== null) {
            particlesContainer.current.state.library.removeAbsorber(absorberRef.current);
            absorberRef.current = null;
            console.log("Sucess removing absorber!");
        }
    }, [particlesContainer]);
    

    useEffect(() => {
        if (isParticleLoaded) {
            if (location.pathname !== '/') {
                addAbsorber();
            } else {
                removeAbsorber();
            }
        }
    }, [isParticleLoaded, location.pathname, addAbsorber, removeAbsorber]);

    */

    
    
    
    
    
    const handleLinkClick = () => {
        const absorberOption = {
            distance: 40,
            color: "000000",
            size: {
                value: 100,
                density: 20,
                limit: 100,
            },
        }
        const absorberPosition = {
            x: 1700,
            y: 1000,
        }
        console.log(particlesContainer.current);
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
                            mode: "absorber",
                        },
                        onHover: {
                            enable: true,
                            mode: "trail",
                        },
                        resize: false,
                    },
                    modes: {
                        absorbers: {
                            color: "#FF0000",
                            size: {
                                value: 10,
                                limit: 50,
                                random: {
                                    enable: false,
                                    minimumValue: 5,
                                },
                            },
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
            }}
        />
    );
});



export default ParticlesBackground;
