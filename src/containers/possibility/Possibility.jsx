import React from 'react';
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className='fltech__possibility section__padding' id='possibility'>
            <div className='fltech__possibility-image'>
                <img src={possibilityImage} alt="possibility"/>
            </div>
            <div className='fltech__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.</p>
                <h4>Request Early Acces to Get Started</h4>
            </div>
          
        </div>
    )
}

export default Possibility 