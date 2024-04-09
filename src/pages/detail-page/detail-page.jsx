import React from 'react'
import './detail-page.scss'

export const DetailPage = () => {
    return (
        <div className="detailPage">
            <div className='images'>
                <div className='image'>
                    <img src="https://optim.tildacdn.com/tild3438-6264-4332-b061-383638623030/-/format/webp/2.png" alt="image" />
                </div>
                <div className='imagesBlock'>
                    {images.map((items) => (
                        <div>
                            <img src={items.img} alt="image" key={items.id} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='content'>
                <div className='title'>
                    <h3>Моне (СК112/1)</h3>
                    <span>Параметры:</span>
                    <p>Ширина фасада: 14м <br />
                        В глубину: 10.5м<br />
                        Высота в коньке: 5.5м<br />
                        Общая площадь дома: 112.2м² <br />
                        Высота потолка: 2,9м</p>
                </div>
                <div className='description'>
                    <b>Зонирование жилого пространства имеет вид:</b>
                    <p>- Кухня-гостиная – большая и просторная, <br />
                        - З спальни – светлые и уютные, <br />
                        - Терраса – для проведения ваших летних вечеров, <br />
                        - Современные окна в пол, которые наполняют дом светом и теплом, <br />
                        - Современный архитектурный стиль, продуманная планировка и оптимальные размеры.</p>
                </div>
                <div className='text'>
                    <b>Особенности дома:</b>
                    <p>- Отмостка по периметру дома, <br />
                        - Площадка для 2-х автомобилей, <br />
                        - Водоснабжение и канализация в доме, <br />
                        - Ламинированные окна толщиной 70 мм, <br />
                        - Оригинальный дизайн строения, <br />
                        - Чистовая отделка дома <br />
                        - Собственная котельная</p>
                    <b>Каждый проект рассчитывается индивидуально и полностью зависит от ваших предпочтений и пожеланий.</b>
                </div>
            </div>
        </div>
    )
}

const images = [
    {
        id: 1,
        img: 'https://optim.tildacdn.com/tild3331-6537-4336-b135-643437313738/-/cover/120x120/center/center/-/format/webp/4.png'
    },
    {
        id: 2,
        img: 'https://optim.tildacdn.com/tild3438-6264-4332-b061-383638623030/-/format/webp/2.png'
    },
    {
        id: 3,
        img: 'https://optim.tildacdn.com/tild3331-6537-4336-b135-643437313738/-/cover/120x120/center/center/-/format/webp/4.png'
    },
    {
        id: 4,
        img: 'https://optim.tildacdn.com/tild3438-6264-4332-b061-383638623030/-/format/webp/2.png'
    },
    {
        id: 5,
        img: 'https://optim.tildacdn.com/tild3331-6537-4336-b135-643437313738/-/cover/120x120/center/center/-/format/webp/4.png'
    },
    {
        id: 6,
        img: 'https://optim.tildacdn.com/tild3331-6537-4336-b135-643437313738/-/cover/120x120/center/center/-/format/webp/4.png'
    },
    {
        id: 7,
        img: 'https://optim.tildacdn.com/tild3438-6264-4332-b061-383638623030/-/format/webp/2.png'
    },
    {
        id: 8,
        img: 'https://optim.tildacdn.com/tild3331-6537-4336-b135-643437313738/-/cover/120x120/center/center/-/format/webp/4.png'
    },
    {
        id: 9,
        img: 'https://optim.tildacdn.com/tild3438-6264-4332-b061-383638623030/-/format/webp/2.png'
    },
    {
        id: 10,
        img: 'https://optim.tildacdn.com/tild3331-6537-4336-b135-643437313738/-/cover/120x120/center/center/-/format/webp/4.png'
    }
]