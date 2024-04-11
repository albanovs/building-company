import React from 'react'
import './personalAccount-page.scss'
import CardButton from '../../components/Cards/CardButton/cardButton'
import { useNavigate } from 'react-router-dom'

function PersonalAccount() {

  let name = localStorage.getItem('responseData') !== null ? localStorage.getItem('responseData') : ""
  const navigate = useNavigate()

  const localDelete = () => {
    localStorage.removeItem('responseData')
    navigate('/')

  }

  return (
    <div className='personalAccount'>
      <span>Пользователь: {name} </span>
      <h3>Личный кабинет</h3>
      <div className='container'>
        <div className='personal-information'>
          <b>Привет, я {name}</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rerum nostrum corrupti in rem hic, <br /> eligendi provident, possimus vero magni cum, alias iure eveniet quaerat voluptatem est nobis culpa ab!</p>
        </div>
        <div className='history-of-orders'>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quasi inventore debitis veniam molestiae <br /> consequuntur modi, velit odio architecto quidem, libero vero eveniet sequi aliquam aliquid aut, vitae qui quia.</div>
        </div>
        <div className='status'>
          <div>Статус: <b>Активен</b></div>
        </div>
        <div className="exit">
          <CardButton text={'Выйти'}
            onClick={localDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalAccount