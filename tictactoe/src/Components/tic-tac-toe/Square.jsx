import React from 'react'
import "./main.css"

export default function Square({value, onClick}) {

    const style = value ? `squares ${value}`: `squares` ;

  return (
    <button className={style} onClick={onClick} >
        {value}
    </button>
  )
}
