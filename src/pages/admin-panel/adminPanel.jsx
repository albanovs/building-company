import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import './adminPanel.css'
import CatalogPage from './catalogPage'
import UserPage from './userPage'
import OrderPageAdmin from './orderPage'

export default function AdminPanel() {
    return (
        <div>
            <div className='nav'>
                <NavLink className="nav_btn" to="/admin/catalog">Каталог</NavLink>
                <NavLink className="nav_btn" to="/admin/orders">Заказы</NavLink>
                <NavLink className="nav_btn" to="/admin/users">Пользователи</NavLink>
            </div>
            <div>
                <Routes>
                    <Route path='/admin/catalog' element={<CatalogPage />} />
                    <Route path='/admin/users' element={<UserPage />} />
                    <Route path='/admin/orders' element={<OrderPageAdmin />} />
                </Routes>
            </div>
        </div>
    )
}
