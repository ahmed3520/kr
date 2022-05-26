import React from 'react'
import Nav from '../components/navbar/Nav'
import LessonDetail from '../components/payment/LessonDetail'
import PaymentForm from '../components/payment/PaymentForm'
import style from './css/payment.module.css'
const Payment = () => {
  return (
    <>
      <Nav/>
      <div className={style.payment_cont}>
          <LessonDetail img='lesson-banner.png' title={'Learn English by Karen Tutor'} price={'35$'}/>
          <PaymentForm/>
      </div>
    </>
  )
}

export default Payment