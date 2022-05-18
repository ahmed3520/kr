import React from 'react'

const Live = ({name, date}) => {
  return (
      <div className='live-cont dflex'>
    <div className='li-border'>
            </div>
        <div className='li-con dflex fcol'>
            <span className='li-name'>
                {name}
            </span>
            <span className='li-date'>
            {date}    
            </span>
        </div> 
        </div>

  )
}

export default Live