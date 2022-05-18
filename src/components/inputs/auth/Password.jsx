import React from 'react'

const Password = () => {
  return (
    <div className='dflex au-input falcenter'>
        <img src='/lock.svg' alt="E-mail icon" className='i-icon'/>
        <input className='in-txt' type="password"/>
        <img src='/eye.svg' alt='lock' className='s-icon'/>
    </div>
  )
}

export default Password