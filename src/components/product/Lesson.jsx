import React from 'react'
import style from './lesson.module.css'
const Lesson = ({img,desc, learn}) => {
  return (
    <div className={style.learn_cont}>
        <div className={style.lesson_banner}>
            <img src={'/'+img} className={style.lesson_img_banner} alt={desc}/>
            <p className={style.lesson_desc+ ' '+  style.fds500}>
                {desc}
            </p>
        </div>
        <div className={style.learning_st}>
            <span className={style.wt_learn+' '+ style.re_data}>
            What will you learn?
            </span>
            <ul>
                {learn.map((val,index)=>{
                    return <li key={index} className={style.learn_li+' '+ style.fds500}>{val}</li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Lesson