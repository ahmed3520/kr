import React from 'react'
import style from './scehduleDate.module.css'
const ScehduleDate = ({title, date}) => {
  return (
    <div className={style.sc_date}>
        <span className={style.les_span}> 
            {date}
        </span>
        <span className={style.scehdule_title}>
            {title}
        </span>
    </div>
  )
}

export default ScehduleDate