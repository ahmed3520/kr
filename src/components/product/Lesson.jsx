import React from 'react'

const Lesson = ({img,desc, learn}) => {
  return (
    <div className='dflex fcol learn-cont'>
        <div className='dflex fcol lesson-banner'>
            <img src={'/'+img} alt={desc}/>
            <p className='lesson-desc fds500'>
                {desc}
            </p>
        </div>
        <div className='dflex fcol learning-st'>
            <span className='wt-learn re-data'>
            What will you learn?
            </span>
            <ul>
                {learn.map((val,index)=>{
                    return <li key={index} className='learn-li fds500'>{val}</li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Lesson