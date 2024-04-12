import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import './adminPanel.css'
import CatalogPage from './catalogPage'
import UserPage from './userPage'
import OrderPageAdmin from './orderPage'
import { useNavigate } from 'react-router-dom'

export default function AdminPanel() {

    const navigate = useNavigate()

    const LogOut = () => {
        localStorage.removeItem('responseData')
        navigate('/')
    }
    return (
        <div>
            <div className='nav'>
                <NavLink className="nav_btn" to="/admin">Каталог</NavLink>
                <NavLink className="nav_btn" to="/admin/orders">Заказы</NavLink>
                <NavLink className="nav_btn" to="/admin/users">Пользователи</NavLink>
            </div>
            <div>
                <Routes>
                    <Route path='/admin' element={<CatalogPage />} />
                    <Route path='/admin/users' element={<UserPage />} />
                    <Route path='/admin/orders' element={<OrderPageAdmin />} />
                </Routes>
            </div>
            <button onClick={LogOut} className='btn_logOut'>Выход</button>
        </div>
    )
}
