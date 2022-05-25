import React from 'react'
import style from './state.module.css'
const State = () => {
  return (
    <>
    <div  className={style.state_wrapper}>
        <div className='dflex fcol st-wr fcenter st-na'>
            <div style={{display:'flex'}}>
            <span className='st-name'>
            Total Live Lessons
            </span>
            </div>
            <div style={{display:'flex'}}>
            <span className='st-num'>
            131
            </span>
            </div>
        </div>
    </div>
    <div className={style.state_wrapper} style={{ flexDirection:'row',alignItems:'center'}}>
        <div className='st-cash dflex fcenter falcenter'>
            <img src='/subscriptions.png' alt='subscription image'/>
        </div>
        <div className='dflex ds fcol'>
            <span className='st-name'>
            Upcoming Lessons
            </span>
            <span className='st-num'>
            4
            </span>
        </div>
    </div>
    <div className={style.state_wrapper} style={{ flexDirection:'row',alignItems:'center'}}>
        <div className='st-per dflex fcenter bkg-cy falcenter'>
            <img src='/st-person.png' alt='subscription image'/>
        </div>
        <div className='dflex ds fcol'>
            <span className='st-name'>
            Total Sudents
            </span>
            <span className='st-num'>
            321
            </span>
        </div>
        <img className='im-graph' src='/Graph.png'/>
    </div>
    <div  className={style.te + " " +style.state_wrapper } >
        <div className='dflex fcol st-wr fcenter st-na'>
            <div className='dflex'>
            <span className='st-name cl-white fo'>
            Total Earning
            </span>
            </div>
            <div className='dflex' style={{display:'flex'}}>
            <span className='st-num cl-white' >
            $5340.50
            </span>
            </div>
        </div>
        <img className='im-chart' src='/Chart.png'/>
    </div>
    </>
  )
}

export default State