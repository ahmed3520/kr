import React from 'react'
import Lesson from './Lesson'
import Live from './Live'
import style from './css/dash.module.css'
const DashFeed = () => {
  return (
    <div className={style.feedres} style={{width:'100%', justifyContent:'space-between'}}>
        <div className={style.top_lessons}>
            <span className={style.t_sp}>
                Top Lessons
            </span>
            <Lesson name={"History of English"} id={"31525"} earning={"$15324.50"} studentNumber={"131 students"}/>
            <Lesson name={"Importance of English"} id={"26273"} earning={"$1887.50"} studentNumber={"16 students"}/>
            <Lesson name={"Relevance of English"} id={"27283"} earning={"$723.50"} studentNumber={"3 students"}/>
            <button className={style.red}>View all
            <img src='/arrow.png' alt='arrow to right'/>
            </button>
        </div>
        <div className={style.top_lessons}>
            <span  className={style.t_sp +' '+ style.li_sp}>
            Upcoming Live Lessons
            </span>
         <Live name={"English and Diasporas"} date={"01:00 PM - 02:00 PM"}/>
         <Live name={"Britain or American"} date={"02:00 PM - 03:00 PM"}/>
         <Live name={"Understanding Punctuations"} date={"03:00 PM - 04:00 PM"}/>

           <button className={style.red}>View all Classes
            <img src='/arrow.png' alt='arrow to right'/>
            </button>
        </div>
    </div>
  )
}

export default DashFeed