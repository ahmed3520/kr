import React from 'react'

const ColumnState = ({choosen, day, percentage, pos}) => {
  return (
    <>
        <div className='fcol dflex'>
        <div className={`${choosen+" "+pos} candle`} style={{height:`${percentage}%`}}>
        </div>
        <span className='can-mo'>{day}</span>
        </div>
    </>
  )
}

export default ColumnState