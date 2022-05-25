import React from 'react'
import style from './notify.module.css'
const Notify = ({img,desc,date}) => {
  return (
    <div style={{marginTop:'12px', display:'flex'}}>
        <div className={style.not_img}>
            <img src={`/${img}`} alt={desc}/>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <span className={style.not_desc}>{desc}</span>
            <span className={style.not_date}>{date}</span>

        </div>
    </div>
  )
}

export default Notify