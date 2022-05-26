import React from 'react'
import style from './css/live.module.css'
const Live = ({name, date}) => {
  return (
      <div className={style.live_cont}>
    <div className={style.li_border}>
            </div>
        <div className={style.li_con}>
            <span className={style.li_name}>
                {name}
            </span> 
            <span className={style.li_date}>
            {date}    
            </span>
        </div> 
        </div>

  )
}

export default Live