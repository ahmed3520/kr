import React from 'react'
import DashNav from '../components/navbar/DashNav'
import State from '../components/stat/State'
import DashFeed from '../components/Feed/DashFeed'
import Earning from '../components/earningState/Earning'
import Notify from '../components/notifications/Notify'
import style from './dashboard.module.css'
const Dashboard = () => {
  return (
    <div className={style.dcont}>
     <DashNav/>
     <div className={style.dash_cont}>
       <div className={style.dash_na}>
         <div className={style.dash_name}>
         Hi Karen,
         </div>
         <div className={style.wl}>
           <div className={style.da_left}>
             <span>
             Welcome  to Tutors!
             </span>
           </div>
           <div className={style.da_right}>
             <div className={style.pay}>
               <div className={style.pay_img}>
               <img src='/wallet.png' alt='wallet'/>
               </div>
               <div className={style.pay_name}>
               <span>Setup Payouts</span>
               </div>
             </div>
             <div className={style.cam}>
               <div className={style.cam_img}>
             <img src='/cam.png' alt='wallet'/>
             </div>
             <div className={style.cam_name}>
               <span>Setup Payouts</span>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className='st' style={{marginTop:'30px', display:'flex', justifyContent:'space-between'}}>
         <State/>
       </div>
       <div style={{display:'flex', marginTop:'15px'}}>
         <DashFeed/>
       </div>
       <div className={style.da_b}>
         <Earning/>
         <div className={style.notification}>
           <div className={style.not_cont}>
           <span className={style.not_title}>
           Notification
           </span>
           <div className={style.noti_det}>
             <span>Recent</span>
           <Notify img={"not.png"} desc={"Joshua A just registred for your course"} date={"Today, 16:36"}/>
           <Notify img={"not.png"} desc={"Joshua A just registred for your course"} date={"Today, 16:36"}/>
           <Notify img={"not.png"} desc={"Joshua A just registred for your course"} date={"Today, 16:36"}/>
           <button className={style.red + ' '+  style.noti_v}>View all
            <img src='/arrow.png' alt='arrow to right'/>
            </button>
           </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Dashboard