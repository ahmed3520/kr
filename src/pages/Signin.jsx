import React from 'react'
import Nav from '../components/navbar/Nav'
import Email from '../components/inputs/auth/Email'
import Password from '../components/inputs/auth/Password'
import Sign from '../components/buttons/auth/Sign'
import { Link } from 'react-router-dom'
import style from './css/auth.module.css'
const Signin = () => {
  return (
      <>
    <Nav/>

    <div className={style.faround}>
        <div className={style.im_auth}>
            <img src="/signperson.png" alt="person" />
        </div>
        <div className={style.auth_r}>
            <div className={style.a_desc}>
            <h5>Sign In</h5>
            <span>Or create an account
                <Link to='/signup'>
                    here
                </Link>
            </span>
            </div>
            <div className={style.em_wr}>
            <span className={style.in_wr}>
                Email
            </span>
            <Email/>
            </div>
            <div className={style.pss_wr}>
            <span className={style.in_wr}>
                Password
            </span>
            <Password/>
            </div>
            <div className={style.btn_au}>
                <Sign text="Sign in"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin