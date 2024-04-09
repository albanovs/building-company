import React from 'react'
import './features.scss'
import CardsFeatures from '../Cards/CardsFeature/CardsFeatures'
import { GrCertificate } from "react-icons/gr";
import { MdPhotoFilter } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function Features() {
    return (
        <div className='features'>
            <span>Наши преимущества</span>
            <div className='cards'>
                <CardsFeatures
                    icon={<GrCertificate />}
                    title="Работаем строго по договору"
                    description='Стоимость строительсва фиксированная.  
                    И все наши обязательства прописаны в договоре.'
                />
                <CardsFeatures
                    icon={<AiOutlineSafetyCertificate />}
                    title="Индивидуальные проекты"
                    description='Возможны изменения проектов из каталога и строительство по индивидуальным планам.'
                />
                <CardsFeatures
                    icon={<MdPhotoFilter />}
                    title="Фотоотчет процесса строительства"
                    description='Бесплатный фото или видео отчет  
                    (по договорённости)'
                />
                <CardsFeatures
                    icon={<GiTakeMyMoney />}
                    title="Честная цена и понятные условия"
                    description='Поэтапная оплата. Нет скрытых платежей и мелких шрифтов.'
                />
            </div>
        </div>
    )
}

export default Features