import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../assets/css/IntroPage.css'
import DecodingAnimation from '../animations/DecodingTextAnimation/DecodingAnimation';
import "../animations/DecodingTextAnimation/DecodingAnimation.scss";

function IntroPage({ setAbsorberActive, onLinkClick }) {

    const MotionLink = motion(Link);

    const glitchVariants = {
        visible: {
            opacity: 1,
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
            }
        },
        glitch: {
            opacity: 0,
            transition: {
                duration: 0.5,
            }
        }
    };

    const textVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 0.5,
                ease: "easeInOut",
            }
        }
    };

    return (
            <div className="Intro">
                    <div className='Intro-Content'>
                        <DecodingAnimation>
                            <h1 className='text-animation'>H</h1>
                            <h1 className='text-animation'>E</h1>
                            <h1 className='text-animation'>L</h1>
                            <h1 className='text-animation'>L</h1>
                            <h1 className='text-animation'>O</h1>
                            <h1 className='text-animation'>,</h1>
                            <div className='space'></div>
                            <h1 className='text-animation'>T</h1>
                            <h1 className='text-animation'>H</h1>
                            <h1 className='text-animation'>I</h1>
                            <h1 className='text-animation'>S</h1>
                            <div className='space'></div>
                            <h1 className='text-animation'>I</h1>
                            <h1 className='text-animation'>S</h1>
                            <div className='space'></div>
                            <h1 className='text-animation'>W</h1>
                            <h1 className='text-animation'>H</h1>
                            <h1 className='text-animation'>E</h1>
                            <h1 className='text-animation'>R</h1>
                            <h1 className='text-animation'>E</h1>
                            <div className='space'></div>
                            <h1 className='text-animation'>M</h1>
                            <h1 className='text-animation'>Y</h1>
                            <div className='space'></div>
                            <h1 className='text-animation'>C</h1>
                            <h1 className='text-animation'>A</h1>
                            <h1 className='text-animation'>R</h1>
                            <h1 className='text-animation'>E</h1>
                            <h1 className='text-animation'>E</h1>
                            <h1 className='text-animation'>R</h1>
                            <div className='space'></div>
                            <h1 className='text-animation'>Starts</h1>
                            <h1 className='text-animation'>.</h1>
                        </DecodingAnimation>
                        <MotionLink
                            initial="glitch"
                            animate={ "visible" }
                            variants={glitchVariants}
                            to="/home-page"
                            className='start-link'
                            onClick={onLinkClick}
                        >
                            GO
                        </MotionLink>
                    </div>
        </div>
    );
}

export default IntroPage;