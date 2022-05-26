import React from 'react'
import style from './css/lessondetail.module.css'

const LessonDetail = ({img, title, price}) => {
  return (
    <div className={style.payment_left}>
        <img className={style.lesson_img_banner} src={'/'+img} alt={title}/> 
        <div className={style.payment_pr}>
        <span className={style.re_data}>
            {title}
        </span>  
 
            <span className={style.les_span+' '+ style.re_sp} style={{marginTop:'23px'}}>
            Price for all classes
            </span>
            <span className={style.cls_sp} style={{lineHeight:'20px'}}>
                {price}
            </span>
        </div>
    </div>
  )
}

export default LessonDetail