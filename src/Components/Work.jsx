import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'

const Work = () => {

    const workInfoData = [
        {
            image : PickMeals,
            title : "Picks Meals",
            text: "Explore our menu and choose from a variety of delicious dishes made with fresh ingredients."
        },
        {
            image : ChooseMeals,
            title : "Choose How Often",
            text: "Select your favorite dishes and create a meal that perfectly suits your taste and cravings."
        },
        {
            image : DeliveryMeals,
            title : "Fast Deliveries",
            text: "Sit back, relax, and enjoy freshly prepared food served with care and great hospitality."
        }
    ]



  return (
    <div className="work-section-wrapper">
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
            From choosing your favorite dishes to enjoying every bite, we make
            your dining experience simple, delicious, and enjoyable from start
            to finish. 
            </p>
        </div>

        <div className='work-section-bottom'>
            {
                workInfoData.map((data)=>(
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }

        </div>
      
    </div>
  )
}

export default Work
