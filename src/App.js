import React from 'react';

import { Footer, Blog , Possibility, About, Header, Features} from './containers';
import {Brand, CTA, Navbar, } from './components';
import './App.css'
const App = () => {
    return (
        <div className='App'>
           <div className='gradient__bg'>
                <Navbar/>
                <Header/>
           </div>
           <Brand/>
           <About/>
           <Features/>
           <Possibility/> 
           <CTA/>
           <Blog/>
           <Footer/>
        </div>
    )
}

export default App 