import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../assets/css/IntroPage.css'

function IntroPage({ setAbsorberActive, onLinkClick }) {

    return (
            <div className="Intro">
                    <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }} 
                        transition={{ duration: 1.5 }}
                    >
                        <div className='Intro-Content'>
                            <h1>Hello, this is where my career starts</h1>
                            <Link to="/home-page" className="start-link" onClick={ onLinkClick }>Go</Link>
                        </div>
                    </motion.div>
                </div>
    );
}

export default IntroPage;