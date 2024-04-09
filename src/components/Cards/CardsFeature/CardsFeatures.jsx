import React from 'react'
import './cardsFeatures.scss'

function CardsFeatures({ icon, title, description }) {
    return (
        <div className='cardsFeatures'>
            <div>{icon}</div>
            <div className='items'>
                <span>{title}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardsFeatures