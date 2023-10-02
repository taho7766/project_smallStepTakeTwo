import { useLocation, Link } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import "../assets/css/LinkMenus.css";
import React, { useState } from "react";

function LinkMenus() {

    const location = useLocation();
    const isHomePage = location.pathname === '/home-page';
    const [isHovered, setIsHovered] = useState(false);

    const transitions = useTransition(isHovered, {
        from: { opacity: 0.5, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0.5, transform: 'scale(0)' },
        config: { duration: 250 },
    });

    return (
        <div
          className={isHomePage ? 'home-menu-container' : 'non-home-menu-container'}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {transitions((style, item) => 
            item ? (
              <animated.div style={style} className="links">
                <Link to="/bio" className="custom-link">
                  Bio
                </Link>
                <Link to="/showcase" className="custom-link">
                  Showcase
                </Link>
                <Link to="/contact" className="custom-link">
                  Contact
                </Link>
              </animated.div>
            ) : (
              <animated.div style={style} className="dots-container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </animated.div>
            )
          )}
        </div>
      );
    }
    

export default LinkMenus;