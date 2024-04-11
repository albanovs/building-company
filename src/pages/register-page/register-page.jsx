import React, { useState } from 'react'
import './register-page.scss'
import cm from 'classnames'
import CardButton from '../../components/Cards/CardButton/cardButton'
import Login from '../../components/login/login'
import Register from '../../components/register/register'

export const RegisterPage = () => {

    const [index, setIndex] = useState(1);

    return (
        <div className='register-page'>
            <div className='container'>
                <h3>Авторизация</h3>
                <div className="buttons">
                    <div
                        onClick={() => setIndex(1)}
                        className={cm({ active: index === 1 })}
                    >
                        <CardButton text={'Вход'} />
                    </div>
                    <div
                        onClick={() => setIndex(2)}
                        className={cm({ active: index === 2 })}
                    >
                        <CardButton text={'Регистрация'} />
                    </div>
                </div>
                {index === 1 && <Login />}
                {index === 2 && <Register />}
            </div>
        </div>
    )
}