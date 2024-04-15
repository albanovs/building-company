import React, { useEffect, useState } from 'react';
import { api } from '../../Api';
import { MdDeleteForever } from "react-icons/md";
import CardButton from '../../components/Cards/CardButton/cardButton'

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
        const fileNameWithoutSpaces = file.name.replace(/\s/g, '');
        const modifiedFile = new File([file], fileNameWithoutSpaces, { type: file.type });
        setFormData({ ...formData, photo: modifiedFile });
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

            await api.post('/projects', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setFormData({
                projectName: '',
                parameters: '',
                price: '',
                area: '',
                photo: null,
                description: ''
            });
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const handleSubmitModal = async (e) => {
        e.preventDefault();
        try {
            await api.patch(`/projects/${selectedItem._id}`, selectedItem);
            setShowModal(false);
            fetchData();
        } catch (error) {
            console.error('Ошибка при обновлении данных:', error);
        }
    };


    const handleDelete = async (itemId) => {
        try {
            await api.delete(`/projects/${itemId}`);
            fetchData();
        } catch (error) {
            console.error('Ошибка при удалении проекта:', error);
        }
    };

    const handleEdit = (item) => {
        setSelectedItem(item);
        setShowModal(true);
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
                    <CardButton text={'Отправить'} style={{ background: "rgba(42, 37, 75, 1)" }} />
                </form>
            </div>
            <div className='contain_catalog'>
                {datas.map(item => {
                    const baseUrl = `${api.defaults.baseURL}/uploads/${item.photo}`
                    return (
                        <div className='catalog_items'>
                            <img src={baseUrl} alt="" />
                            <div>
                                <h1>{item.projectName}</h1>
                                <h2>{item.area}</h2>
                                <span>Цена {item.price} рублей</span>
                                <div className='catalog_button'>
                                    <MdDeleteForever onClick={() => handleDelete(item._id)} color='red' size={30} />
                                    <button onClick={() => handleEdit(item)}>Изменить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {showModal && (
                <div className="modal">
                    <form onSubmit={handleSubmitModal}>
                        <h2>Редактировать проект</h2>
                        <label htmlFor="editName">Название:</label>
                        <input type="text" id="editName" name="projectName" value={selectedItem.projectName} onChange={(e) => setSelectedItem({ ...selectedItem, projectName: e.target.value })} />

                        <label htmlFor="editParameters">Параметры проекта:</label>
                        <textarea id="editParameters" rows="4" name="parameters" value={selectedItem.parameters} onChange={(e) => setSelectedItem({ ...selectedItem, parameters: e.target.value })}></textarea>

                        <label htmlFor="editDescription">Описание проекта:</label>
                        <textarea id="editDescription" rows="4" name="description" value={selectedItem.description} onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}></textarea>

                        <label htmlFor="editPrice">Цена проекта:</label>
                        <input type="text" id="editPrice" name="price" value={selectedItem.price} onChange={(e) => setSelectedItem({ ...selectedItem, price: e.target.value })} />

                        <label htmlFor="editArea">Площадь:</label>
                        <input type="text" id="editArea" name="area" value={selectedItem.area} onChange={(e) => setSelectedItem({ ...selectedItem, area: e.target.value })} />

                        <button type="submit">Сохранить</button>
                    </form>
                    <button onClick={() => setShowModal(false)}>Закрыть</button>
                </div>
            )}

        </div>
    );
}