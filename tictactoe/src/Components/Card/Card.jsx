import React from 'react'
import "./card.css"

export default function Card() {
  return (
    <div className='container' >
        <div className="card">
            <div className="top">
                <img className='Topimg' src="" alt="" />
                <span className='Toptext' > Protien </span>
                <span className='Topdesc' > Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />
                 Reiciendis voluptas cum at mollitia.
                 <br />
                 Reiciendis voluptas cum at mollitia.
                 </span>
                <button className='button' >Add to cart</button>
            </div>
            {/* <div className="bottom"></div> */}
        </div>
    </div>
  )
}
