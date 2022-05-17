import React from 'react'
import Nav from '../components/navbar/Nav'
const Con1 = () => {
  return (
    <>
    <Nav/>
    <div className='dflex cont djspacebetween'>
        <div className='left dflex fcol fcenter'>
            <div className='con'>
            <h3 className='landing-h3'>
            Calculate your carbon footprint
            </h3>
            <h5 className='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
            <button className='btn'>
                Calculate
            </button>
            </div>
        </div>
        <div className='right'>
            <img className='lan-img' src='/rec4.png'/>
            <div className="background">
    <div className="line1"></div>
    <div className="line2"></div>
</div>


        </div>
    </div>
    </>
  )
}

export default Con1