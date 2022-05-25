import React from 'react'
import style from './lesson.module.css'
const Lesson = ({name, id, earning, studentNumber}) => {
  return (
    <div className={style.f_les}>
        <div className={style.les_left}>
            <div className={style.les_bkg}>
                <img src='/les-sub.png' alt='lesson icon'/>
            </div>
            <div className={style.les_name }>
                <span className={style.le_name }>
                    {name}
                </span>
                <span className={style.le_id}>
                    #{id}
                </span>
            </div>
        </div>
        <div className={style.les_right }>
            <span className={style.le_earn }>
                {earning}
            </span>
            <span className={style.le_id }>
                {studentNumber} students
            </span>
        </div>
    </div>
  )
}

export default Lesson