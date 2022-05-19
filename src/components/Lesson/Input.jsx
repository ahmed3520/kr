import React from 'react'

const Input = ({width, height, place}) => {
  return (
    <div className='cs-input' style={{width:`${width}px`, height:`${height}px`}}>
        <input className='les-input' placeholder={place}/>
    </div>
  )
}

export default Input