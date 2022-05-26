import React from 'react'
import Nav from '../components/navbar/Nav'
import landing from './css/landing.module.css'
const Landing = () => {
  return (
    <>
    <Nav/>
    <div className={landing.cont} style={{marginTop:'65px'}}>
        <div className={landing.left}>
            <div className={landing.con}>
              <div className={landing.con}>
            <h3 className={landing.landing_h3}>
            Make Impact by teaching
            </h3>
            <h5 className={landing.landing_h5}>
            easy booking,easy payment for your scheduled live classes.lets handle all the stress for you while you do your work easily
            </h5>
            </div>
            <div className='land-btn'>
            <button className={landing.landing_btn}>
                Get started
            </button>
            </div>
            </div>
        </div>
        <div className={landing.right}>
            <img className={landing.landing_img} src='/sm-women.png'/>
            <div className={landing.fback}>
              <div className={landing.s_line}>
                
              </div>

              <div className={landing.f_cont}>
              <div className={landing.v_line}>
              </div>
              <div className={landing.desc}>
                
                <span className={landing.desc_span}>
                "Thank you so much . Booking Classes has nevr been this easy for me.  is exactly what I have been looking for."
                </span>
                <div className={landing.name}>
                  <h5 className={landing.name_h5}>
                  Gloria Rose
                  </h5>
                </div>
                </div>
              </div>

          
            </div>
            <div className={landing.arr_circ}>
                <img className={landing.red} src='/Vector 5.svg'/>
                </div>
        </div>
    </div>
    </>
  )
}

export default Landing