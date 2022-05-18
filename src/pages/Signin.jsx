import React from 'react'
import Nav from '../components/navbar/Nav'
import Email from '../components/inputs/auth/Email'
import Password from '../components/inputs/auth/Password'
import Sign from '../components/buttons/auth/Sign'
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
      <>
    <Nav/>

    <div className='dflex faround mrt-110'>
        <div className='im-auth im-s'>
            <img src="/signperson.png" alt="person" />
        </div>
        <div className='auth-r dflex fcol'>
            <div className='a-desc'>
            <h5>Sign In</h5>
            <span>Or create an account
                <Link to='/signup'>
                    here
                </Link>
            </span>
            </div>
            <div className='dflex fcol '>
            <span className='in-text'>
                Email
            </span>
            <Email/>
            </div>
            <div className='dflex fcol mr-36'>
            <span className='in-text'>
                Password
            </span>
            <Password/>
            </div>
            <div className='dflex mr-36'>
                <Sign text="Sign in"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signin