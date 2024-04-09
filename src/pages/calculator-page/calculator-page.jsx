import React from 'react'
import './calculator-page.scss'
import CardButton from '../../components/Cards/CardButton/cardButton'

export const CalculatorPage = () => {
    return (
        <div className='calculator-page'>
            <h3>Рассчитать стоимость</h3>
            <form action="">
                <div className='first-form'>
                    <div>
                        <label htmlFor="">Что желаете построить? *</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Размер объекта*</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Название или код товара</label>
                        <input type="text" placeholder='Введите название или код товара' />
                    </div>
                    <div>
                        <label htmlFor="">Фундамент *</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Утепление стен *</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Этажность *</label>
                        <input type="text" />
                    </div>
                </div>
                <div className='second-form'>
                    <div>
                        <label htmlFor="">Адрес строительства *</label>
                        <input type="text" placeholder='Введите адрес строительства' />
                    </div>
                    <div>
                        <label htmlFor="">Если у Вас есть проект/чертеж, загрузите его</label>
                        <input type="file" />
                    </div>
                    <div>
                        <label htmlFor="">Имя*</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Телефон*</label>
                        <input type="telephone" />
                    </div>
                    <div>
                        <label htmlFor="">Электронная почта</label>
                        <input type="email" placeholder='E-mail' />
                    </div>
                    <div>
                        <label htmlFor="">Оставить комментарий</label>
                        <input type="text" placeholder='Введите комментарий' />
                    </div>
                </div>
            <CardButton text='Рассчитать' />
            </form>
        </div>
    )
}