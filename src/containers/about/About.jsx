import React from 'react';
import {Feature} from '../../components';
import './about.css'

const About = () => {
    return (
        <div className='fltech__about section__margin' id='fltech'>
            <div className='fltech__about-feature'>
                <Feature title='What is Fltech' text='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.'/>
            </div>
            <div className='fltech__about-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className='fltech__about-container'>
                <Feature title='ChatBots' text='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.'/>
                <Feature title='Knowledge' text='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.'/>
                <Feature title='Education' text='Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.'/>             
            
            </div>
           
        </div>
    )
}

export default About 