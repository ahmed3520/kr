import React from 'react'

const PaymentForm = () => {
  return (
    <div className='dflex fcol payment-form'>
        <div className='payment-header'>
            <span className='re-data pay-header'>
            Your payment details
            </span>
        </div>
        <div className='payment-in dflex fcol'>
            <span className='pfs'>
                Name
            </span>
            <input type='text' className='payment-in' placeholder='Karen Tutor'/>
        </div>
        <div className='payment-in mrt-72 dflex fcol'>
            <span className='pfs'>
            CARD NUMBER
            </span>
            <div className='dflex p-card'>
            <input type='tel' maxLength='19' className='payment-in' placeholder='3876  3422 6564  8028'/>
            <img src='/visa.png' alt='visa icon'/>
            </div>
        </div>
        <div className='dflex mrt-72 card-details'>
        <div className="dflex fcol p-card-det">
            <span className='pfs' style={{marginBottom:'16px'}}>
            EXPIRATION DATE
            </span>
            <div className='dflex djspacebetween s-wrapper' style={{maxWidth:'80%'}}>
             <div className='payment-drp'>
                <select name="month" className="month pselect">
                    <option value="September" className='op-month'>September</option>
                </select>
            </div>
            <div className='payment-drp' style={{width:'40%'}}>
                <select name="year" className="year pselect">
                    <option value="2017" className='op-year'>2017</option>
                </select>
            </div>
            </div>

        </div>
        <div className='dflex fcol br-none'>
                <div className='dflex'>
                <span className='pfs'>
                    CVC
                </span>
                <img src='/Group.png' alt='question mark'/>
                </div>
                <input maxLength={3} minLength={3} placeholder='XXX' type='tel' className='in-csv'/>
            </div>
            </div>
        <div className='card-checkbox'>
            <label className="cont-checkbox">Save my card for future purchase
                <input type="checkbox" checked="checked"/>
                <span className="checkmark"></span>
            </label>
        </div>
        <button className='payment-submit bkg-cy dflex fcenter falcenter'>
                Publish
        </button>
    </div>
  )
}

export default PaymentForm