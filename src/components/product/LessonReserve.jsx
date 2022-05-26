import React from 'react'
import SubLessonDetail from './SubLessonDetail'
import style from './css/lessonreserve.module.css'
const LessonReserve = ({lessonTitle, liveDate, category, teacher, price, numberOfResgesteredStudents}) => {
  return (
    <div className={style.l_reserve}>
        <div className={style.ls_preb}>
        <span className={style.l_title}>{lessonTitle}</span>

     
        <div className={style.l_live}>
            <div className={style.li_border} style={{height:'auto', marginLeft:'0px'}}>
            </div>
            <SubLessonDetail title='Going Live' data={liveDate} mrb={0}/>
        </div>
        <div className={style.l_cat}>
            <SubLessonDetail title='Category' data={category} mrb={0}/>
        </div>
        <div className='dflex l-cat'>
            <SubLessonDetail title='Teacher' data={teacher} mrb={0}/>
        </div> 
        <div className={style.l_cat}>
            <SubLessonDetail title='Price for all classes' data={price} mrb={0}/>
        </div> 
        <div   style={{display:'flex', flexDirection:'column'}}>
            <span className={style.les_span} style={{fontWeight:'700', marginBottom:'0'}}>
                {numberOfResgesteredStudents}
            </span>
            <span className={style.st_reg}>Students registered</span>
        </div>
        </div>
        <button className={style.res_submit}>
        Reserve Seat
        </button>
    </div>
  )
}

export default LessonReserve