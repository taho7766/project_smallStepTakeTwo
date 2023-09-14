import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


import ParticlesBackground from "../components/ParticlesBackground"
import ListProjects from '../views/ListProjects';
import AddProject from '../components/AddProject';
import EditProject from '../components/EditProject';
import ViewProject from '../views/ViewProject';
import Login from '../components/Login'
import IntroPage from '../views/IntroPage';
import MotionPage from '../components/MotionPage'
import HomePage from '../views/HomePage';


const Router = () => {
    const [absorberActive, setAbsorberActive] = useState(false);
    const particlesRef = useRef(null);

    return (
        <BrowserRouter>
            <ParticlesBackground ref={particlesRef} absorberActive={ absorberActive }/>
            <AnimatePresence mode='wait'>
                <Routes>
                    <Route path='/' element={
                        <MotionPage>
                            <IntroPage 
                                setAbsorberActive={setAbsorberActive}
                                onLinkClick={() => particlesRef.current.handleLinkClick()}
                            />
                        </MotionPage>
                    } />
                    <Route path='/home-page' element={<HomePage />} />
                    <Route path='/add' element={<AddProject />} />
                    <Route path='/edit/:id' element={<EditProject />} />
                    <Route path='/view/:id' element={<ViewProject />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
};

export default Router;