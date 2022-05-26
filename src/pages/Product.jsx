import React from 'react'
import Nav from '../components/navbar/Nav'
import Lesson from '../components/product/Lesson'
import LessonReserve from '../components/product/LessonReserve'
import Scehdule from '../components/product/Scehdule'
import style from './css/product.module.css'
const Product = () => {
    const learn=[
        ' Learn the basics of why things are funny, to joke writing, and performing live and how to navigate the comedy circuit & build your career.',
        ' Learn the basics of why things are funny, to joke writing, and performing live and how to navigate the comedy circuit & build your career.',
        ' Learn the basics of why things are funny, to joke writing, and performing live and how to navigate the comedy circuit & build your career.'
    ]
    const classScehdule=[
        {
            date:'01:00 PM - 02:00 PM,  11th of May',
            title:'English basics for young grad'
        },
        {
            date:'01:00 PM - 02:00 PM,  11th of May',
            title:'English basics for young grad'
        },
        {
            date:'01:00 PM - 02:00 PM,  11th of May',
            title:'English basics for young grad'
        },
        {
            date:'01:00 PM - 02:00 PM,  11th of May',
            title:'English basics for young grad'
        }
    ]
  return (
    <>
      <Nav/>
      <div className={style.pr_cont +' ' + style.faround}>
      <LessonReserve lessonTitle={'Learn English by Karen Tutor'} liveDate={'01:00 PM - 02:00 PM 11th of May'}
      category='Language' teacher={'Karen Tutor'} price={'35$'} numberOfResgesteredStudents={'6'}
      />
     <Lesson img={'lesson-banner.png'} desc=' Learn the basics of why things are funny, to joke writing, and performing live and how to navigate the comedy circuit & build your career.'
     learn={learn}
     />
     <Scehdule classScehdule={classScehdule}/>
      </div>
    </>
  )
}

export default Product