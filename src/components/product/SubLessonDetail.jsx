import React from 'react'
import style from './sublesson.module.css'
const SubLessonDetail = ({title,data, mrb}) => {
  return (
    <div className={style.res_left}>
        <span className={style.les_span} style={{marginBottom:`${mrb}px`}}>
            {title}
        </span>
        <span className={style.re_data}>
            {data}
        </span>
    </div>
  )
}

export default SubLessonDetail