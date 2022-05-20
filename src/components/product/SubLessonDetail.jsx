import React from 'react'

const SubLessonDetail = ({title,data, mrb}) => {
  return (
    <div className='dflex fcol res-left '>
        <span className='les-span re-sp' style={{marginBottom:`${mrb}px`}}>
            {title}
        </span>
        <span className='re-data'>
            {data}
        </span>
    </div>
  )
}

export default SubLessonDetail