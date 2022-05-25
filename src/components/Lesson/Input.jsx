import React from 'react'
import style from './input.module.css'
const Input = ({width, height, place}) => {
  return (
    <div className={style.cs_input} style={{width:`${width}px`, height:`${height}px`}}>
        <input className={style.les_input} placeholder={place}/>
    </div>
  )
}

export default Input