import React from 'react'
import ScehduleDate from './ScehduleDate'

const Scehdule = ({classScehdule}) => {
  return (
    <div className='dflex fcol class-cont'>
        <div className='sub-cont'>
            <div className='cls-title mrb22'>
                <span className='re-data cls-sp'>Class Scehdule</span>
            </div>
            {
                classScehdule.map((val,index)=>{
                    return <ScehduleDate key={index} date={val.date} title={val.title}/>
                })
            }
        </div>
    </div>
  )
}

export default Scehdule