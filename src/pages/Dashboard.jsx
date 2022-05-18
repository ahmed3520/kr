import React from 'react'
import DashNav from '../components/navbar/DashNav'
import State from '../components/stat/State'
import DashFeed from '../components/Feed/DashFeed'
import Earning from '../components/earningState/Earning'
import Notify from '../components/notifications/Notify'
const Dashboard = () => {
  return (
    <div className='dflex dcont'>
     <DashNav/>
     <div className='dash-cont dflex fcol '>
       <div className='dflex dash-na'>
         <div className='dash-name'>
         Hi Karen,
         </div>
         <div className='dflex djspacebetween'>
           <div className='da-left'>
             <span>
             Welcome  to Tutors!
             </span>
           </div>
           <div className='da-right dflex'>
             <div className='dflex pay'>
               <div className='pay-img dflex falcenter'>
               <img src='/wallet.png' alt='wallet'/>
               </div>
               <div className='dflex falcenter pay-name'>
               <span>Setup Payouts</span>
               </div>
             </div>
             <div className='dflex cam bkg-cy'>
               <div className='cam-img dflex falcenter'>
             <img src='/cam.png' alt='wallet'/>
             </div>
             <div className='dflex falcenter cam-name'>
               <span>Setup Payouts</span>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className='dflex djspacebetween mrt-30'>
         <State/>
       </div>
       <div className='dflex mrt-15'>
         <DashFeed/>
       </div>
       <div className='dflex mrt-15 djspacebetween'>
         <Earning/>
         <div className='dflex fcol notification'>
           <div className='not-cont dflex fcol'>
           <span className='not-title'>
           Notification
           </span>
           <div className='noti-det'>
             <span>Recent</span>
           <Notify img={"not.png"} desc={"Joshua A just registred for your course"} date={"Today, 16:36"}/>
           <Notify img={"not.png"} desc={"Joshua A just registred for your course"} date={"Today, 16:36"}/>
           <Notify img={"not.png"} desc={"Joshua A just registred for your course"} date={"Today, 16:36"}/>
           <button className='red noti-v dflex'>View all
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