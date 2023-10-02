import React, {useEffect, useRef }  from "react";
import LinkMenus from "../components/LinkMenus";
import '../assets/css/HomePage.css';

function HomePage() {
    const paraRef = useRef(null);

  useEffect(() => {

    const text = paraRef.current.innerText;
    let index = 0;

    const typewriter = () => {
      
        if(paraRef.current){
            paraRef.current.innerText = text.slice(0, index);
        }
        index += 10;
        if(index < text.length + 10) {
            setTimeout(typewriter, 1);
        }
    }

    typewriter();

  }, [paraRef]);


    return (
        <div className="Home-Page">
            <LinkMenus />
            <p ref={ paraRef }>I'm Taewoo Hong. You're currently viewing my very first venture into web development.
            The frontend of this site is meticulously crafted using React, showcasing a user-centric design and fluid interactivity.
            While I approached the backend with an initial foundational understanding of JavaScript, I diligently expanded my expertise to ensure
            a seamless user experience. Beyond the technical aspects, this project embodies my 
            dedication to pushing boundaries, embracing challenges, and fostering an unwavering commitment to lifelong learning and growth.
            I invite you to explore and witness the fusion of my passion, skill, and ambition.
            </p>
        </div>
    );
}

export default HomePage;