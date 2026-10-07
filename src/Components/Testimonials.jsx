import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='work-section-wrapper' id='testimonials'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>Our guests love the food, warm atmosphere, and friendly service. Here is what some of our customers have to say about their experience.</p>
        </div>

        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>
                The food was absolutely delicious and the service was wonderful. Everything was fresh, flavorful, and beautifully prepared. I would definitely love to visit again!
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>

        </div>
      
    </div>
  )
}

export default Testimonials
