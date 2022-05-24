import React from 'react'
import style from './auth.module.css'
const Password = () => {
  return (
    <div className={style.au_input}>
        <img src='/lock.svg' alt="E-mail icon" className={style.i_icon}/>
        <input className={style.in_txt} type="password"/>
        <img src='/eye.svg' alt='lock' className={style.s_icon}/>
    </div>
  )
}

export default Password