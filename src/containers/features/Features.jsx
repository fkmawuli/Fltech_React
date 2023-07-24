import React from 'react';
import { Feature } from '../../components';
import './features.css'

const featuresData = [
    {
        title: 'Improving end distrust instantly',
        text: 'When you click Online Video, you can paste in the embed code for the video you want to add.'
    },
    {
        title: 'Become the tended active',
        text: 'When you click Online Video, you can paste in the embed code for the video you want to add.'
    },
    {
        title: 'Bring your websites to us',
        text: 'When you click Online Video, you can paste in the embed code for the video you want to add.'
    },
    {
        title: 'Really low budget for qulaity laptop',
        text: 'When you click Online Video, you can paste in the embed code for the video you want to add.'
    },

]

const Features = () => {
    return (
        <div className='fltech__features section__padding' id='features'>
           <div className='fltech__features-heading'>
             <h1 className='gradient__text'>The Future is Now and You Just Need To Realize it. Step into Future Today & make it Happen</h1>
             <p>Request early access</p>
           </div>
           <div className='fltech__features-container'>
            {featuresData.map((item, index) =>(
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}

           </div>
        </div>
    )
}

export default Features  