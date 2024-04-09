import React from 'react'
import './heroBlocks.scss'
import { NavLink } from 'react-router-dom'
import CardButton from '../Cards/CardButton/cardButton'

function HeroBlocks() {
    return (
        <div className='hero-blocks-container'>
            <div className='hero-blocks'>
                <div className="container">
                    <div className="title">
                        <h1>СТРОИТЬ ДОМ ПРОСТО</h1>
                       <NavLink to={'/calculator'}><CardButton text="Расчитать стоимость" /></NavLink>
                    </div>
                    <p>На участок поставляются готовые модули, производится их монтаж в короткие сроки.
                        Мы гарантируем выполнение всех взятых на себя обязательств и доступные цены.</p>
                </div>
                <div className="right-image">
                    <img src="https://www.terem-pro.ru/upload/iblock/4cb/4cb51fb67c7152d96bb5a849d9fb98ac.jpg" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default HeroBlocks