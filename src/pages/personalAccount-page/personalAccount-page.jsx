import React, { useEffect, useState } from 'react'
import './personalAccount-page.scss'
import CardButton from '../../components/Cards/CardButton/cardButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../redux/slice/order-slice'
import { MdDeleteForever } from "react-icons/md";
import { api } from '../../Api'

function PersonalAccount() {

  const [data, setData] = useState([]);

  const dispatch = useDispatch()
  const [orders, setOrders] = useState([])
  let name = localStorage.getItem('responseData') !== null ? localStorage.getItem('responseData') : ""
  const navigate = useNavigate()

  const localDelete = () => {
    localStorage.removeItem('responseData')
    navigate('/')
  }

  // const getDatas = async () => {
  //   try {
  //     const response = await api.get('/orders')
  //     setOrders(response.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getDatas()
  // }, [])

  // console.log(orders);

  const orderDatas = useSelector(state => state.orderSlice)
  console.log(orderDatas, 'order');

  const selectedData = orderDatas.orders.filter(item => item.client === name)
  console.log(selectedData);

  useEffect(() => {
    dispatch(getOrders())
  }, [])

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
    <div className='personalAccount'>
      <span>Пользователь: {name} </span>
      <h3>Личный кабинет</h3>
      <div className='container'>
        <div className='personal-information'>
          <b>Привет, я {name}</b>
        </div>
        <div className='history-of-orders'>
          <table>
            <thead>
              <tr>
                <th>Имя клиента</th>
                <th>Проект</th>
                <th>Цена</th>
                <th>Дата заказа</th>
                <th>Номер телефона</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.map(item => (
                <tr key={item._id}>
                  <td>{item.client}</td>
                  <td>{item.projectName}</td>
                  <td>{item.price}</td>
                  <td>{item.data}</td>
                  <td>{item.num}</td>
                  <td>{item.status ? "Окончен" : "В процессе"}</td>
                </tr>
              ))}
            </tbody>
          </table>
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