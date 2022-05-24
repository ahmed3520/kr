import React from 'react'
import style from './auth.module.css'

const Email = () => {
  return (
    <div className={style.au_input}>
        <img src='/user.svg' alt="user icon" className={style.i_icon}/>
        <input className={style.in_txt} type="txt"/>
    </div>
  )
}

export default Email