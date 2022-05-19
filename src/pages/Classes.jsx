import React from 'react'
import DashNav from '../components/navbar/DashNav'
import Card from '../components/Lesson/Card'
import CompLesson from '../components/Lesson/CompLesson'
const Classes = () => {
  return (
    < div className='dflex dcont'>
     <DashNav/>

     <div className='len-cont'>

      <div className='len-header dflex '>
         <h4>
         My Lesson 
         </h4>
      </div>
      <div className='len-details ' >
         <div className='len-title com-titl  mrt-15'>
           <span>Upcoming Live Lessons </span>
         </div>
         <div className='dflex lesson-cont faround flx-5'>
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
         <div className='len-title com-titl  mrt-15'>
           <span>Completed Lessons</span>
         </div>
         <div className='dflex comp-cont faround flx-5'>
           
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