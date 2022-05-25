import React from 'react'
import style from './paymentform.module.css'
const PaymentForm = () => {
  return (
    <div className={style.payment_form}>
        <div className={style.payment_header}>
            <span className={style.pay_header}>
            Your payment details
            </span>
        </div>
        
        <div className={style.payment_in}>
            <span className={style.pfs}>
                Name
            </span>
            <input type='text' className={style.payment_in} placeholder='Karen Tutor'/>
        </div>
        <div className={style.payment_in} style={{marginTop:'72px'}}>
            <span className={style.pfs}>
            CARD NUMBER
            </span>
            <div className={style.p_card}>
            <input type='tel' maxLength='19' className={style.payment_in} placeholder='3876  3422 6564  8028'/>
            <img src='/visa.png' alt='visa icon'/>
            </div>
        </div>

        <div className={style.card_details} style={{marginTop:'72px'}}>
        <div className={style.p_card_det}>
            <span className={style.pfs} style={{marginBottom:'16px'}}>
            EXPIRATION DATE
            </span>

            <div className={style.s_wrapper} style={{maxWidth:'80%'}}>
             <div className={style.payment_drp}>
                <select name="month" className={style.pselect}>
                    <option value="September" className={style.op_month}>September</option>
                </select>
            </div>
            <div className={style.payment_drp} style={{width:'40%'}}>
                <select name="year" className="year pselect">
                    <option value="2017" className={style.op_year}>2017</option>
                </select>
            </div>
            </div>

        </div>
        <div className={style.br_none}>
                <div  style={{display:'flex'}}>
                <span className={style.pfs}>
                    CVC
                </span>
                <img src='/Group.png' alt='question mark'/>
                </div>
                <input maxLength={3} minLength={3} placeholder='XXX' type='tel' className='in-csv'/>
            </div>
            </div>
        <div className={style.card_checkbox}>
            <label className={style.cont_checkbox}>Save my card for future purchase
                <input type="checkbox" checked="checked"/>
                <span className={style.checkmark}></span>
            </label>
        </div>
        <button className={style.payment_submit}>
                Publish
        </button>
    </div>
  )
}

export default PaymentForm