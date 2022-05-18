import React from 'react'
import Nav from '../components/navbar/Nav'
import Email from '../components/inputs/auth/Email'
import Password from '../components/inputs/auth/Password'
import Name from '../components/inputs/auth/Name'
import Sign from '../components/buttons/auth/Sign'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
      <>
    <Nav/>

    <div className='dflex faround mrt-110'>
        <div className='im-auth'>
            <img src="/humaaan-8.svg" alt="person" />
        </div>
        <div className='auth-r'>
            <div className='a-desc' style={{marginBottom:'40px'}}>
            <p>Become a tutor</p>
            </div>
            <div className='dflex fcol '>
            <span className='in-text  au-name'>
             Full name
            </span>
            <Name/>
            </div>
            <div className='dflex fcol mrt-23'>
            <span className='in-text'>
                Email
            </span>
            <Email/>
            </div>
            <div className='dflex fcol mrt-23'>
            <span className='in-text'>
                Password
            </span>
            <Password/>
            </div>
            <div className='dflex mr-36'>
                <Sign text="Sign up"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup