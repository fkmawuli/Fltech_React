import React from 'react';
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='fltech__header section__padding' id='home'>
           <div className='fltech__header-content'>
                <h1 className='gradient__text'>Let's Build Something amazing at Fltech for you</h1>
                <p>Get in touch for your maazing websites and premium software development services that comes very cool and affordable rates.</p>
                
                <div className='fltech__header-content__input'>
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="button">Get Started</button>
                </div>

                <div className='fltech__header-content__people'>
                    <img src={people} alt="people"/>
                    <p>1,500 people have requested website development services from Fltech</p>
                </div>
           </div>
                <div className='fltech__header-image'>
                    <img src={ai} alt="ai_image"/>
                </div>
        </div>
    )
}

export default Header 