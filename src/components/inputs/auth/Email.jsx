import React from 'react'
import style from './auth.module.css'


const Email = () => {
  return (
    <div className={style.au_input}>
        <img src='/mail.svg' alt="E-mail icon" className={style.i_icon}/>
        <input className={style.in_txt} type="email"/>
    </div>
  )
}

export default Email