import React from 'react'
import './cardButton.scss'

function CardButton({text}) {
  return (
        <button className='card-button'>{text}</button>
  )
}

export default CardButton