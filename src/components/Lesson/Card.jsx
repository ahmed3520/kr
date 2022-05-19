import React from 'react'

const Card = ({img, title, date,desc}) => {
  return (
    <div className='dflex lesson-card mrt-15'>
        <img src={'/'+img} className='lesson-img' alt={desc}/>
        <div className='dflex fcol card-det'>
            <div className='mr-12p'>
            <span className='card-title'>{title}</span>
            <div className='dflex mrb22'>
                <img src='/clock.png' alt='clock' style={{marginRight:'5px'}}/>
                <span className='card-date'>{date}</span>
            </div>
            <span className='card-desc'>
                {desc}
            </span>
            <div className='btn-grp mrt-20 dflex'>
                <button className='edit dflex fcenter falcenter'>
                    Edit
                </button>
                <button className='share dflex fcenter falcenter'>
                    Share
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card