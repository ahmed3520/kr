import React from 'react'
import DashNav from '../components/navbar/DashNav'
import State from '../components/stat/State'
const Dashboard = () => {
  return (
    <div className='dflex dcont'>
     <DashNav/>
     <div className='dash-cont'>
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
       <div className='dflex djspacebetween mrt-47'>
         <State/>
       </div>
     </div>
    </div>
  )
}

export default Dashboard