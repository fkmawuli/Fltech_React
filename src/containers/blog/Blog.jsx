import React from 'react';
import './blog.css'
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './import'

const Blog = () => {
    return (
        <div className='fltech__blog section__padding' id='blog'>
           <div className='fltech__blog-heading'>
            <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
           </div>
           <div className='fltech__blog-container'>
            <div className='fltech__blog-container_groupA'>
                <Article imageUrl={blog01} date='May 30, 2023' title='Fltech is the future. Let us design for you'/>
            </div>
            <div className='fltech__blog-container_groupB'>
                <Article imageUrl={blog02} date='May 30, 2023' title='Fltech is the future. Let us design for you'/>
                <Article imageUrl={blog03} date='May 30, 2023' title='Fltech is the future. Let us design for you'/>
                <Article imageUrl={blog04} date='May 30, 2023' title='Fltech is the future. Let us design for you'/>
                <Article imageUrl={blog05} date='May 30, 2023' title='Fltech is the future. Let us design for you'/>
            </div>
           </div>
        </div>
    )
}

export default Blog 