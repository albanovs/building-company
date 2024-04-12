import React, { useEffect, useState } from 'react';
import { api } from '../../Api';
import './OrderPageAdmin.css';
import { MdDeleteForever } from "react-icons/md";

export default function OrderPageAdmin() {
    const [data, setData] = useState([]);

    const getDatas = async () => {
        try {
            const response = await api.get('/orders');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDatas();
    }, []);

    console.log(data);

    const handleStatusChange = async (id, newStatus) => {
        try {
            await api.patch(`/orders/${id}`, { status: newStatus });
            getDatas();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await api.delete(`/orders/${id}`);
            getDatas();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="order-page-admin">
            <table>
                <thead>
                    <tr>
                        <th>Имя клиента</th>
                        <th>Проект</th>
                        <th>Цена</th>
                        <th>Дата заказа</th>
                        <th>Номер телефона</th>
                        <th>Статус</th>
                        <th>Изменить статус</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.client}</td>
                            <td>{item.projectName}</td>
                            <td>{item.price}</td>
                            <td>{item.data}</td>
                            <td>{item.num}</td>
                            <td>{item.status ? "Окончен" : "В процессе"}</td>
                            <td>
                                <button className='button' style={item.status  ? { background: "#9a9e47" } : { background: "45a049F" }} onClick={() => handleStatusChange(item._id, !item.status)}>
                                    {item.status ? "В процессе" : "Окончен"}
                                </button>
                            </td>
                            <td>
                                <MdDeleteForever onClick={() => deleteItem(item._id)} color='red' size={30} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}
