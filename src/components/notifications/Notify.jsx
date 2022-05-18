import React from 'react'

const Notify = ({img,desc,date}) => {
  return (
    <div className='dflex' style={{marginTop:'12px'}}>
        <div className='not-img'>
            <img src={`/${img}`} alt={desc}/>
        </div>
        <div className='dflex fcol'>
            <span className='not-desc'>{desc}</span>
            <span className='not-date'>{date}</span>

        </div>
    </div>
  )
}

export default Notify