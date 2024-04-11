import React, { useState } from 'react'
import './login.scss'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import CardButton from '../Cards/CardButton/cardButton';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { api } from '../../Api';

function Login() {

    const [passwordEye, setPasswordEye] = useState(false);

    const navigate = useNavigate()
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({})

    const onSubmit = async (loginData) => {
        const loginDatas = {
            username: loginData.name,
            password: parseFloat(loginData.password)
        }
        try {
            const response = await api.post('/login', loginDatas)
            localStorage.setItem('responseData', response.data.message)
            navigate('/personalAccount')
        } catch (error) {
            console.log(error);
        }
        reset()
    }



    return (
        <div className='login'>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">E-mail</label>
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
                    <label htmlFor="">Пароль</label>
                    <input type={passwordEye ? 'text' : 'password'}
                        {...register('password', {
                            required: true
                        })}
                    />
                    <div onClick={() => setPasswordEye(!passwordEye)}>
                        {passwordEye ? (
                            <IoMdEye className='icon' />
                        ) : (
                            <IoMdEyeOff className='icon' />
                        )}
                    </div>
                    <div className='error'>
                        {errors?.password && <p>Поле обязательно к заполнению</p>}
                    </div>
                </div>
                <div className='login-buttons'>
                    <NavLink to={''}>Забыли пароль?</NavLink>
                    <CardButton text={'Войти'} />
                </div>
            </form>
        </div>
    )
}

export default Login