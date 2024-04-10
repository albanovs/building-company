import React, { useState } from 'react'
import '../login/login.scss'
import { useForm, Controller } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import CardButton from '../Cards/CardButton/cardButton';
import { postRegister } from '../../redux/slice/register-slice';
import { useDispatch } from 'react-redux';
import { api } from '../../Api';


function Register() {

    const [passwordEye1, setPasswordEye1] = useState(false);
    const [passwordEye2, setPasswordEye2] = useState(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        control,
        watch
    } = useForm({})

    const onSubmit = async (registerData) => {
        const registerDatas = {
            names: registerData.name,
            username: registerData.email,
            password: parseFloat(registerData.password)
        }
        setLoading(false)
        try {
            await api.post('/register', registerDatas)
            console.log('success');
            setLoading(true)
        } catch (error) {
            console.log(error);
        }
        // dispatch(postRegister(registerDatas))
        // console.log(registerData, 'register');
        // alert('Вы зарегистрировались')
        
        reset()
    }

    return (
        <div className='login'>
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
                    <label htmlFor="">E-mail</label>
                    <input type="email"
                        {...register('email', {
                            required: true
                        })}
                    />
                    <div className='error'>
                        {errors?.email && <p>Поле обязательно к заполнению</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="">Пароль</label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input
                                    {...field}
                                    type={passwordEye1 ? 'text' : 'password'}
                                />
                                <div onClick={() => setPasswordEye1(!passwordEye1)}>
                                    {passwordEye1 ? (
                                        <IoMdEye className='icon' />
                                    ) : (
                                        <IoMdEyeOff className='icon' />
                                    )}
                                </div>
                            </div>
                        )}
                        rules={{
                            required: 'Введите пароль',
                        }}
                    />
                    <div className='error'>
                        {errors?.password && <p>{errors.password.message}</p>}
                    </div>
                </div>
                <div>
                    <label htmlFor="">Повторите пароль</label>
                    <Controller
                        name="confirmpassword"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input
                                    {...field}
                                    type={passwordEye2 ? 'text' : 'password'}
                                />
                                <div onClick={() => setPasswordEye2(!passwordEye2)}>
                                    {passwordEye2 ? (
                                        <IoMdEye className='icon' />
                                    ) : (
                                        <IoMdEyeOff className='icon' />
                                    )}
                                </div>
                            </div>
                        )}
                        rules={{
                            required: 'Повторите пароль',
                            validate: (value) =>
                                value === watch('password') || 'Пароли не совпадают',
                        }}
                    />
                    <div className='error'>
                        {errors?.confirmpassword && <p>{errors.confirmpassword.message}</p>}
                    </div>
                </div>
                <div className='login-buttons'>
                    <CardButton text={'Зарегистрироваться'}
                    onClick= {loading ? 'Зарегистрироваться' : 'Загрузка...'} 
                     />
                </div>
            </form>
        </div>
    )
}

export default Register