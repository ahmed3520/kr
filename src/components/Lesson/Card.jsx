import React from 'react'
import style from './css/card.module.css'
const Card = ({img, title, date,desc}) => {
  return (
    <div  className={style.lesson_card}>
        <img src={'/'+img} className={style.lesson_img} alt={desc}/>
        <div className={style.card_det}>
            <div  style={{marginLeft:'12px'}}>
            <span className={style.card_title}>{title}</span>
            <div style={{marginBottom: '22px', display:'flex'}}>
                <img src='/clock.png' alt='clock' style={{marginRight:'5px'}}/>
                <span className={style.card_date}>{date}</span>
            </div>
            <span className={style.card_desc}>
                {desc}
            </span>
            <div className={style.btn_grp} style={{marginTop:'20px'}}>
                <button className={style.edit}>
                    Edit
                </button>
                <button className={style.share}>
                    Share
                </button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card