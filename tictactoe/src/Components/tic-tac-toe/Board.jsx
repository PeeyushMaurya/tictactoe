import React from 'react'
import "./main.css"
import Square from "./Square"

export default function Board({ squares, onClick }) {
  return (
    <div className="board">
        {squares.map((square, i) =>(
             <Square key={i} value={square} onClick={() => onClick(i)} />
        ) )}
    </div>
  )
};
