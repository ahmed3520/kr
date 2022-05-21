import React from 'react'
import Nav from '../components/navbar/Nav'
import LessonDetail from '../components/payment/LessonDetail'
import PaymentForm from '../components/payment/PaymentForm'
const Payment = () => {
  return (
    <>
      <Nav/>
      <div className='dflex payment-cont'>
          <LessonDetail img='lesson-banner.png' title={'Learn English by Karen Tutor'} price={'35$'}/>
          <PaymentForm/>
      </div>
    </>
  )
}

export default Payment