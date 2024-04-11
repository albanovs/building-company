import React, { useState } from 'react'
import './calculator-page.scss'
import CardButton from '../../components/Cards/CardButton/cardButton'
import { api } from '../../Api'

export const CalculatorPage = () => {

    const [formData, setFormData] = useState({
        buildingType: '',
        numberOfFloors: '',
        area: '',
        wallMaterial: '',
        roofType: '',
        foundationType: '',
        numberOfRooms: '',
    });
    const [itogs, setItogs] = useState("")
    const [numbers, setNumbers] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const calculateCost = () => {
        let totalCost = 0;


        if (formData.buildingType === 'Дом: Основное жилое здание.') {
            totalCost += 10000;
        } else if (formData.buildingType === 'Дача: Летний домик для отдыха за городом') {
            totalCost += 8000;
        } else if (formData.buildingType === 'Гараж: Помещение для хранения автомобиля') {
            totalCost += 5000;
        } else if (formData.buildingType === 'Баня: Парилка для русского бани или финской сауны') {
            totalCost += 6000;
        }
        if (formData.foundationType === 'lentoch') {
            totalCost += 3000;
        } else if (formData.foundationType === 'svai') {
            totalCost += 5000;
        } else if (formData.foundationType === 'block') {
            totalCost += 4000;
        }
        if (formData.numberOfFloors === 'one') {
            totalCost += 5000;
        } else if (formData.numberOfFloors === 'two') {
            totalCost += 8000;
        } else if (formData.numberOfFloors === 'three') {
            totalCost += 12000;
        }
        if (formData.area === '50') {
            totalCost += 2000;
        } else if (formData.area === '100') {
            totalCost += 3000;
        } else if (formData.area === '150') {
            totalCost += 4000;
        } else if (formData.area === '200') {
            totalCost += 5000;
        }
        if (formData.wallMaterial === 'kirpich') {
            totalCost += 4000;
        } else if (formData.wallMaterial === 'derevo') {
            totalCost += 3000;
        } else if (formData.wallMaterial === 'block') {
            totalCost += 3500;
        } else if (formData.wallMaterial === 'metal') {
            totalCost += 4500;
        }
        if (formData.roofType === 'shatrovaya') {
            totalCost += 3000;
        } else if (formData.roofType === 'chetyr') {
            totalCost += 3500;
        } else if (formData.roofType === 'mansart') {
            totalCost += 4000;
        } else if (formData.roofType === 'ploskaya') {
            totalCost += 2500;
        }
        if (formData.numberOfRooms === '1') {
            totalCost += 2000;
        } else if (formData.numberOfRooms === '2') {
            totalCost += 3000;
        } else if (formData.numberOfRooms === 'studio') {
            totalCost += 1500;
        }
        return totalCost;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cost = calculateCost();
        setItogs(cost)
    };

    const setDatas = async () => {
        const currentDate = new Date();
        const day = currentDate.getDate() < 10 ? '0' + currentDate.getDate() : currentDate.getDate();
        const month = currentDate.getMonth() + 1 < 10 ? '0' + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
        const formattedDate = `${day}.${month}.${currentDate.getFullYear()}`;
        const clients = localStorage.getItem('responseData');
        const requestData = {
            data: formattedDate,
            client: clients,
            price: itogs,
            status: false,
            num: numbers
        };

        try {
            await api.post('/orders', requestData);
            console.log('success');
        } catch (error) {
            console.error('Ошибка при отправке данных на сервер:', error);
        }
    };


    return (
        <div className='calculator-page'>
            <h3>Рассчитать стоимость</h3>
            <form action="">
                <div className='first-form'>
                    <div>
                        <label htmlFor="">Что желаете построить? *</label>
                        <select name="buildingType" id="" onChange={handleInputChange}>
                            <option value="">выберите</option>
                            <option value="Дом: Основное жилое здание.">Дом: Основное жилое здание.</option>
                            <option value="Дача: Летний домик для отдыха за городом">Дача: Летний домик для отдыха за городом</option>
                            <option value="Гараж: Помещение для хранения автомобиля">Гараж: Помещение для хранения автомобиля</option>
                            <option value="Баня: Парилка для русского бани или финской сауны">Баня: Парилка для русского бани или финской сауны</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Количество этажей*</label>
                        <select name="numberOfFloors" id="" onChange={handleInputChange}>
                            <option value="">выберите</option>
                            <option value="one">Одноэтажный: Строение с одним этажом</option>
                            <option value="two">Двухэтажный: Дом с двумя этажами.</option>
                            <option value="three">Многоэтажный: Большое здание с несколькими этажами</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Площадь:</label>
                        <select name="area" id="" onChange={handleInputChange}>
                            <option value="">выберите</option>
                            <option value="50">50 м2</option>
                            <option value="100">100 м2</option>
                            <option value="150">150 м2</option>
                            <option value="200">200 м2</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Материалы стен *</label>
                        <select name="wallMaterial" id="" onChange={handleInputChange}>
                            <option value="">выберите</option>
                            <option value="kirpich">Кирпич: Строение из кирпича</option>
                            <option value="derevo">Дерево: Дом с деревянными стенами</option>
                            <option value="block">Блоки: Строительство с использованием блочных материалов</option>
                            <option value="metal">Металл: Дом с металлической конструкцией и/или обшивкой</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Тип кровли: *</label>
                        <select name="roofType" id="" onChange={handleInputChange}>
                            <option value="">выберите</option>
                            <option value="shatrovaya">Шатровая: Простая односкатная крыша.</option>
                            <option value="chetyr">Четырехскатная: Крыша с четырьмя скатами</option>
                            <option value="mansart">Мансардная: Крыша с мансардным этажом</option>
                            <option value="ploskaya">Плоская: Крыша без скатов</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Тип фундамента: *</label>
                        <select name="foundationType" id="" onChange={handleInputChange}>
                            <option value="">выберите</option>
                            <option value="lentoch">Ленточный: Фундамент в виде бетонной ленты</option>
                            <option value="svai">Свайный: Фундамент на сваях.</option>
                            <option value="block">Блочный: Использование блоков для строительства фундамента.</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Количество комнат: *</label>
                        <select name="numberOfRooms" id="" onChange={handleInputChange}>
                            <option value="">выберите</option>
                            <option value="studio">Студия: Одна общая комната без разделения на отдельные помещения</option>
                            <option value="1">1-комнатная: Одна отдельная комната</option>
                            <option value="2">2-комнатная: Две отдельные комнаты и т.д</option>
                        </select>
                    </div>
                </div>
            </form>
            <div>
                <h1>Итог: {itogs} рублей</h1>
            </div>
            <button onClick={handleSubmit}>Расчитать</button>
            <div>
                <span>Введите ваш номер телефона:  <input type="text" onChange={(e) => setNumbers(e.target.value)} /></span>
                <button onClick={setDatas}>Заказать</button>
            </div>
        </div>
    )
}