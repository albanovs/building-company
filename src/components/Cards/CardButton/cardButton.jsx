import React from 'react'
import './cardButton.scss'

function CardButton({ text, onClick, style }) {
  return (
    <button onClick={onClick} className='card-button' style={style}>{text}</button>
  )
}

export default CardButton