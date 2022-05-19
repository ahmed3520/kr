import React from 'react'

const CompLesson = ({img, title, date, grpNumbers}) => {
  return (
    <div className='dflex complete-card mrt-15'>
        <img src={'/'+img} className='lesson-img' alt={title}/>
        <div className='dflex fcol comp-det'>
            <div className='mr-12p'>
                <span className='comp-title card-title'>
                    {title}
                </span>   
                <div className="dflex comp-d">
                <div className='dflex mrb22 complete-date' style={{width:'50%'}}>
                    <img src='/clock.png' alt='clock' style={{marginRight:'5px'}}/>
                    <span className='card-date'>{date}</span>
              </div>
              <div className='dflex mrb22 complete-num'>
                    <img src='/Users.png' alt='users icon' style={{marginRight:'5px'}}/>
                    <span className='card-date'>{grpNumbers}</span>
              </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default CompLesson