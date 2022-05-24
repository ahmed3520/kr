import React from 'react'
import Nav from '../components/navbar/Nav'
import Email from '../components/inputs/auth/Email'
import Password from '../components/inputs/auth/Password'
import Name from '../components/inputs/auth/Name'
import Sign from '../components/buttons/auth/Sign'
import style from './auth.module.css'

const Signup = () => {
  return (
      <>
    <Nav/>

    <div className={style.faround}>
    <div className={style.im_auth}>
            <img src="/humaaan-8.svg" alt="person" />
        </div>
        <div className={style.auth_r}>
            <div className={style.a_desc} style={{marginBottom:'40px'}}>
            <p>Become a tutor</p>
            </div>
            <div className='dflex fcol '>
            <span className='in-text  au-name'>
             Full name
            </span>
            <Name/>
            </div>
            <div className={style.em_wr} style={{marginTop:'23px'}}>
            <span className={style.in_wr}>
                Email
            </span>
            <Email/>
            </div>
            <div className={style.pss_wr} style={{marginTop:'23px'}}>
            <span className={style.in_wr}>
                Password
            </span>
            <Password/>
            </div>
            <div className={style.btn_au}>
                <Sign text="Sign up"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup