import React from 'react'
import ScehduleDate from './ScehduleDate'
import style from './css/scehdule.module.css'
const Scehdule = ({classScehdule}) => {
  return (
    <div className={style.class_cont}>
        <div className={style.sub_cont}>
            <div className={style.cls_title}>
                <span className={style.cls_sp}>Class Scehdule</span>
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