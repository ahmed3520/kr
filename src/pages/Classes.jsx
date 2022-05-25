import React from 'react'
import DashNav from '../components/navbar/DashNav'
import Card from '../components/Lesson/Card'
import CompLesson from '../components/Lesson/CompLesson'
import style from './classes.module.css'
const Classes = () => {
  return (
    < div className={style.dcont}>
     <DashNav/>

     <div className={style.len_cont}>

     <div className={style.len_header}>
         <h4>
         My Lesson 
         </h4>
      </div>
      <div className={style.len_details}>
         <div  className={style.len_title+' '+ style.com_title} style={{marginTop:'15px'}}>
           <span>Upcoming Live Lessons </span>
         </div>
         <div  className = {style.lesson_cont + ' '+ style.faround}>
           <Card img={'lesson.png'} title='English basics for young grad' desc={'This class is for students who arew iontreseted in improving thier english skills'}
           date='3rd of August 6:30 Est' 
           />
          <Card img={'lesson.png'} title='English basics for young grad' desc={'This class is for students who arew iontreseted in improving thier english skills'}
           date='3rd of August 6:30 Est' 
           />
           <Card img={'lesson.png'} title='English basics for young grad' desc={'This class is for students who arew iontreseted in improving thier english skills'}
           date='3rd of August 6:30 Est' 
           />
           <Card img={'lesson.png'} title='English basics for young grad' desc={'This class is for students who arew iontreseted in improving thier english skills'}
           date='3rd of August 6:30 Est' 
           />
         </div>
         
         <div  className={style.len_title+' '+ style.com_title} style={{marginTop:'15px'}}>
           <span>Completed Lessons</span>
         </div>
         <div  className = {style.comp_cont + ' '+ style.faround}>
           
           <CompLesson img={'lessoncom.png'} date='3rd of August 6:30 Est' title='English basics for young grad'
           grpNumbers='47 student registered'/>
            <CompLesson img={'lessoncom.png'} date='3rd of August 6:30 Est' title='English basics for young grad'
           grpNumbers='47 student registered'/>
            <CompLesson img={'lessoncom.png'} date='3rd of August 6:30 Est' title='English basics for young grad'
           grpNumbers='47 student registered'/>
            <CompLesson img={'lessoncom.png'} date='3rd of August 6:30 Est' title='English basics for young grad'
           grpNumbers='47 student registered'/>
         </div>
         </div>
    </div>

    </div>
  )
}

export default Classes