import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import './header.scss'
import CardButton from '../Cards/CardButton/cardButton';

export default function Header() {

    const [open, setOpen] = useState(false)

    let toggleClass = open ? "active" : "";

    return (
        <header>
            <div className='headerTop'>
                <NavLink to='/'>Avion</NavLink>
                <div className='header-buttons'>
                    <NavLink to={'tel:+7 (495) 461-00-99'}>+7 (495) 461-00-99</NavLink>
                    <NavLink to='/register'><CardButton text={'Войти'} /></NavLink>
                </div>
                <IoMenu onClick={() => setOpen(!open)} />
            </div>
            <hr />
            <nav
                className={` ${toggleClass}`}
            >
                    <IoCloseOutline onClick={() => setOpen(!open)} />
                <ul>
                    <li><NavLink to='/projects'>Наши работы</NavLink></li>
                    <li><NavLink to=''>О компании</NavLink></li>
                    <li><NavLink to='/calculator'>Расчитать стоимость</NavLink></li>
                    <li><NavLink to='/applicationPage'>Оставить заявку</NavLink></li>
                    <li><NavLink to=''>Контакты</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
