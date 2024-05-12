import React from 'react'
import "../styles/TypeBox.css"

function TypeBox({ avt }) {
    return (
        <div className='typebox'>
            <img src={avt} className='typeboxavt' />
            <input type='text' className='typeboxinput' placeholder='Add a comment...' />
            <button className='typeboxbut'>SEND</button>
        </div>
    )
}

export default TypeBox