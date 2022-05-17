import React from 'react'
import Nav from '../components/navbar/Nav'
const Con1 = () => {
  return (
    <>
    <Nav/>
    <div className='dflex cont faround' style={{marginTop:'65px'}}>
        <div className='left dflex fcol fcenter'>
            <div className='con'>
            <h3 className='landing-h3'>
            Make Impact by teaching
            </h3>
            <h5 className='h5'>
            easy booking,easy payment for your scheduled live classes.lets handle all the stress for you while you do your work easily
            </h5>
            <button className='btn dbrwb'>
                Get started
            </button>
            </div>
        </div>
        <div className='right'>
            <img className='lan-img' src='/sm-women.png'/>
            <div className='fback dflex'>
              <div className='s-line'>
                
              </div>

              <div className='f-cont '>
              <div className='v-line'>
              </div>
              <div className='desc'>
                
                <span>
                "Thank you so much . Booking Classes has nevr been this easy for me.  is exactly what I have been looking for."
                </span>
                <div className='name'>
                  <h5>
                  Gloria Rose
                  </h5>
                </div>
                </div>
              </div>

          
            </div>
            <div className='arr-circ'>
                <img className='red' src='/Vector 5.svg'/>
                </div>
        </div>
    </div>
    </>
  )
}

export default Con1