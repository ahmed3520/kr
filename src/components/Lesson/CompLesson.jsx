import React from 'react'
import style from './css/completedles.module.css'
const CompLesson = ({img, title, date, grpNumbers}) => {
  return (
    <div className={style.complete_card}>
        <img src={'/'+img} className={style.lesson_img} alt={title}/>
        <div className={style.comp_det}>
            <div  style={{marginLeft:'12px'}}>
                <span className={style.comp_title+ ' '+style.card_title}>
                    {title}
                </span>   
                <div className={style.comp_d}>
                <div className={style.complete_date} style={{width:'50%', display:'flex', marginBottom:'22px'}}>
                    <img src='/clock.png' alt='clock' style={{marginRight:'5px'}}/>
                    <span className={style.card_date}>{date}</span>
              </div>
              <div className={style.complete_num} style={{width:'50%', display:'flex', marginBottom:'22px'}}>
                    <img src='/Users.png' alt='users icon' style={{marginRight:'5px'}}/>
                    <span className={style.card_date}>{grpNumbers}</span>
              </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default CompLesson