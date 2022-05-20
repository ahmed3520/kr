import React from 'react'

const ScehduleDate = ({title, date}) => {
  return (
    <div className='dflex fcol sc-date mrb30'>
        <span className='les-span scehdule-date '> 
            {date}
        </span>
        <span className='scehdule-title'>
            {title}
        </span>
    </div>
  )
}

export default ScehduleDate