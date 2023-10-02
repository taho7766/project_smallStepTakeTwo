import React, { useState, useEffect, useRef } from 'react';




function DecodingAnimation({ children }) {
    const textRef = useRef(null);

    useEffect(() => {
        decodeText();

        const interval = setInterval(() => {
            decodeText();
        }, 10000);

        return () => clearInterval(interval);
    }, []);


    function decodeText() {
        const text = textRef.current;
        for ( let i = 0; i < text.children.length; i++) {
            text.children[i].classList.remove('state-1', 'state-2', 'state-3');
        }
        const state = Array.from({ length: text.children.length }, (_, i) => i);
        const shuffled = shuffle(state);

        for( let i = 0; i < shuffled.length; i++) {
            const child = text.children[shuffled[i]];
            const state1Time = Math.round(Math.random() * (2000 - 300) + 50);
            if (child.classList.contains('text-animation')) {
                setTimeout(() => firstStages(child), state1Time);
            }
        }
    }
    function firstStages(child){
        if( child.classList.contains('state-2') ){
            child.classList.add('state-3');
        } else if ( child.classList.contains('state-1') ) {
            child.classList.add('state-2');
        } else if ( !child.classList.contains('state-1') ) {
            child.classList.add('state-1');
            setTimeout(secondStages.bind(null, child), 100);
        }
    }
    function secondStages(child){
        if( child.classList.contains('state-1') ){
            child.classList.add('state-2');
            setTimeout(thirdStages.bind(null, child), 100);
        } else if ( !child.classList.contains('state-1') ){
            child.classList.add('state-1');
        }
    }
    function thirdStages(child){
        if( child.classList.contains('state-2') ) {
            child.classList.add('state-3');
        }
    }
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    return (
        <div className='decode-text' ref={textRef}>
            { children }
        </div>
    );
}

export default DecodingAnimation;