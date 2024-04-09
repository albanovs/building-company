import React from 'react'
import './application.scss'
import { NavLink } from 'react-router-dom'
import CardButton from '../Cards/CardButton/cardButton'

function Application() {
    return (
        <div className='application'>
            <div className='container'>
                <div>
                    <p>не нашли подходящий проект?</p>
                    <span>У вас всегда есть возможность <br />
                        оформить индивидуальный заказ</span>
                </div>
                <NavLink to={'/applicationPage'}><CardButton text={'Оставить заявку'} /></NavLink>
            </div>
        </div>
    )
}

export default Application