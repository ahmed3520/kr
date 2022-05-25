import React from 'react'
import style from './column.module.css'
const ColumnState = ({choosen, day, percentage, pos}) => {
  return (
    <>
        <div  style={{display:'flex', flexDirection:'column'}}>
        <div className={`${choosen+" "+pos}` +' '+ style.candle} style={{height:`${percentage}%`}}>
        </div>
        <span className={style.can_day}>{day}</span>
        </div>
    </>
  )
}

export default ColumnState