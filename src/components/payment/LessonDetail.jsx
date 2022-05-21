import React from 'react'

const LessonDetail = ({img, title, price}) => {
  return (
    <div className='dflex fcol payment-left'>
        <img className='lesson-img-banner' src={'/'+img} alt={title}/> 
        <div className='dflex fcol payment-pr'>
        <span className='re-data'>
            {title}
        </span>  
 
            <span className='les-span re-sp mrt-23'>
            Price for all classes
            </span>
            <span className='re-data cls-sp' style={{lineHeight:'20px'}}>
                {price}
            </span>
        </div>
    </div>
  )
}

export default LessonDetail