import React from 'react'
import SubLessonDetail from './SubLessonDetail'
const LessonReserve = ({lessonTitle, liveDate, category, teacher, price, numberOfResgesteredStudents}) => {
  return (
    <div className='dflex fcol l-reserve'>
        <div className='dflex fcol ls-preb'>
        <span className='l-title'>{lessonTitle}</span>

     
        <div className='dflex l-live'>
            <div className='li-border mrr-10' style={{height:'auto', marginLeft:'0px'}}>
            </div>
            <SubLessonDetail title='Going Live' data={liveDate} mrb={0}/>
        </div>
        <div className='dflex l-cat mrt-20'>
            <SubLessonDetail title='Category' data={category} mrb={0}/>
        </div>
        <div className='dflex l-cat'>
            <SubLessonDetail title='Teacher' data={teacher} mrb={0}/>
        </div> 
        <div className='dflex l-cat'>
            <SubLessonDetail title='Price for all classes' data={price} mrb={0}/>
        </div> 
        <div className='dflex fcol'>
            <span className='les-span' style={{fontWeight:'700', marginBottom:'0'}}>
                {numberOfResgesteredStudents}
            </span>
            <span className='st-reg re-data'>Students registered</span>
        </div>
        </div>
        <button className='res-submit dflex fcenter falcenter'>
        Reserve Seat
        </button>
    </div>
  )
}

export default LessonReserve