import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../Api';

export default function CatalogPage() {
    const [formData, setFormData] = useState({
        photo: null,
        projectName: '',
        parameters: '',
        price: '',
        area: '',
        description: ''
    });
    const [datas, setDatas] = useState([])

    const fetchData = async () => {
        try {
            const response = await api.get('/projects')
            setDatas(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, photo: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('photo', formData.photo);
            formDataToSend.append('projectName', formData.projectName);
            formDataToSend.append('parameters', formData.parameters);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('area', formData.area);
            formDataToSend.append('description', formData.description);

            const response = await api.post('http://localhost:4000/projects', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Ответ от сервера:', response.data);
            // Очистить форму после успешной отправки, если это нужно
            // setFormData({
            //     projectName: '',
            //     parameters: '',
            //     price: '',
            //     area: '',
            //     photo: null,
            //     description: ''
            // });
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };


    return (
        <div className='catalog'>
            <div>
                <h1>Добавить каталог</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Название:</label>
                        <input type="text" autoComplete="off" id="name" name="projectName" value={formData.projectName} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="parameters">Параметры проекта:</label>
                        <textarea id="parameters" autoComplete="off" rows="4" name="parameters" value={formData.parameters} onChange={handleInputChange}></textarea>
                    </div>
                    <div>
                        <label htmlFor="price">Цена проекта:</label>
                        <input type="text" autoComplete="off" id="price" name="price" value={formData.price} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="area">Площадь:</label>
                        <input type="text" autoComplete="off" id="area" name="area" value={formData.area} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="photo">Фото проекта:</label>
                        <input type="file" id="photo" name="photo" onChange={handleFileChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Описание проекта:</label>
                        <textarea id="description" autoComplete="off" rows="4" name="description" value={formData.description} onChange={handleInputChange}></textarea>
                    </div>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div>
                {datas.map(item => {
                    const imageUrl = `${api.defaults.baseURL}/${item.photo}`
                    return (
                        <div>
                            <img src={imageUrl} alt="" />
                            <p>{item.area}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}