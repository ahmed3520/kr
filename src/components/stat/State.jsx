import React from 'react'

const State = () => {
  return (
    <>
    <div className='dflex fcol state-wrapper'>
        <div className='dflex fcol st-wr fcenter st-na'>
            <div className='dflex'>
            <span className='st-name'>
            Total Live Lessons
            </span>
            </div>
            <div className='dflex'>
            <span className='st-num'>
            131
            </span>
            </div>
        </div>
    </div>
    <div className='dflex  state-wrapper falcenter'>
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
    <div className='dflex  state-wrapper falcenter'>
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
    <div className='dflex fcol state-wrapper te'>
        <div className='dflex fcol st-wr fcenter st-na'>
            <div className='dflex'>
            <span className='st-name cl-white fo'>
            Total Earning
            </span>
            </div>
            <div className='dflex'>
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