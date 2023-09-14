import React from 'react';
import '../assets/css/Loader.css'

const Loader = () => (
    <div className='loader-container'>
        <svg class="pl" width="64px" height="64px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <circle class="pl__ring" cx="64" cy="64" r="60" fill="none" stroke="#00FF00" stroke-width="5" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377" stroke-dashoffset="377"/>
      </svg>
      <span className='loading-text'>Loading...</span>
    </div>
)

export default Loader