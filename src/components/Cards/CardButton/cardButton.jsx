import React from 'react'
import './cardButton.scss'

function CardButton({ text, onClick }) {
  return (
    <button onClick={onClick} className='card-button'>{text}</button>
  )
}

export default CardButton