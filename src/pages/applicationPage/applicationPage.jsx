import React, { useState } from 'react'
import './applicationPage.scss'
import CardButton from '../../components/Cards/CardButton/cardButton'
import { useForm } from 'react-hook-form'
import { api } from '../../Api'

function ApplicationPage() {

  const [open, setOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({})


  const onSubmit = async (data) => {
    try {
      await api.post('/send-email', data);
      reset();
      setOpen(!open);
    } catch (error) {
      console.error('Ошибка отправки данных на сервер:', error);
    }
  };

  return (
    <div className='applicationPage'>
      <div className="title">
        <span>Оставьте заявку</span>
        <p>Мы перезвоним вам в удобное для вас время. Укажите своё имя <br />
          и номер телефона. Наши специалисты ответят на все вопросы.</p>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">ФИО</label>
          <input type="text"
            {...register('name', {
              required: true
            })}
          />
          <div className='error'>
            {errors?.name && <p>Поле обязательно к заполнению</p>}
          </div>
        </div>
        <div>
          <label htmlFor="">Срок</label>
          <input type="text"
            {...register('term', {
              required: true
            })}
          />
          <div className="error">
            {errors?.term && <p>Поле обязательно к заполнению</p>}
          </div>
        </div>
        <div>
          <label htmlFor="">Площадь планируемого здания</label>
          <input type="text"
            {...register('area', {
              required: true
            })}
          />
          <div className="error">
            {errors?.area && <p>Поле обязательно к заполнению</p>}
          </div>
        </div>
        <div>
          <label htmlFor="">Количество этажей или пристроек (гараж, беседка и т. д.)</label>
          <input type="text"
            {...register('floors', {
              required: true
            })}
          />
          <div className="error">
            {errors?.floors && <p>Поле обязательно к заполнению</p>}
          </div>
        </div>
        <div>
          <label htmlFor="">Телефон</label>
          <input type="text"
            {...register('phone', {
              required: true
            })}
          />
          <div className="error">
            {errors?.phone && <p>Поле обязательно к заполнению</p>}
          </div>
        </div>
        <CardButton text={'Отправить'} />
      </form>
      {open && (
        <div className='modal'>
          <div className='modal_content'>
            <span>Заказ успешно оформлен!</span>
            <p>Скоро мы с вами свяжемся.</p>
            <CardButton text={'Закрыть'} onClick={() => setOpen(!open)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ApplicationPage