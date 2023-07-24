import React, {useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'; 
import logo from '../../assets/logo.svg'

const Menu = () => (
    <>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#features'>Service</a></p>
                    <p><a href='#about'>About</a></p>
                    <p><a href='#possibility'>Porfolio</a></p>
                    <p><a href='#contact'>Contact</a></p>
                    <p><a href='#blog'>Blog</a></p>
    </>
)

const Navbar = () => {
    const [toggleMneu, setToggleMenu] = useState(false);
    return (
        <div className='fltech__navbar'>
            <div className='fltech__navbar-links'>
                <dvi className='fltech__navabr-links_logo'>
                    <img src={logo} alt="logo"/>
                </dvi> 
                <div className='fltech__navbar-links_container'>
                   <Menu/>
                </div>
            </div>
            <div className='fltech__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
            </div>
            <div className='fltech__navbar-menu'>
                {toggleMneu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false) }/>
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true) }/>
                }

                {
                    toggleMneu && (
                        <div className='fltech__navbar-menu_container scale-up-center'>
                            <div className='fltech__navabr-menu_container-links'>
                                <Menu/>
                                <div className='fltech__navbar-menu_container-links-sign'>
                                    <p>Sign in</p>
                                    <button type='button'>Sign Up</button>
                                 </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar 