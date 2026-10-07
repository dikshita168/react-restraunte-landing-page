import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container' id='about'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="backgroung-img" />
        </div>

        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>

        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
            Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className='primary-text'>
            We believe that great food brings people together. Our restaurant
            is dedicated to serving delicious meals made with fresh ingredients,
            rich flavors, and a passion for good cooking.
            </p>

            <p className='primary-text'>
            Whether you're dining with family, meeting friends, or simply enjoying your favorite meal, we're here to make every visit special.
            </p>

            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/>Watch video</button>
            </div>


        </div>
    </div>
  )
}

export default About

