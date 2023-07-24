import React from 'react';
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='fltech__footer section__padding'>
            <div className='fltech__footer-heading'>
                <h1 className='gradient__text'>Do you want to step into the future before others</h1>
            </div>

            <div className='fltech__footer-btn'>
                <p>Request Early Access</p>
            </div>

            <div className='fltech__footer-links'>
                <div className='fltech__footer-links_logo'>
                    <img src={gpt3Logo} alt='logo'/>
                    <p>Banana Street 214, Ashaiman-Lebanon, All Rghts Reserved</p>
                </div>
                <div className='fltech__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overone</p>
                    <p>Social Media</p>
                    <p>Counter</p>
                    <p>Contact</p>
                </div>
                <div className='fltech__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='fltech__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Banana Street 214, Ashaiman-Lebanon</p>
                    <p>800-1345-13453</p>
                    <p>info@fltech.org</p>
                </div>
            </div>

            <div className='fltech__footer-copyright'>
                <p>&copy; 2023 Fltechnologies. All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer 