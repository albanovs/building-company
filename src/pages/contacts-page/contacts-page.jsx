import React from 'react'
import './contacts-page.scss'
import { NavLink } from 'react-router-dom'

function ContactsPage() {
  return (
    <div className='contacts'>
        <h3>Контакты "Avion". Номер телефона. Адрес производства. Офис. Связаться.</h3>
        <div className='content'>
            <div><span>Единый номер (по РФ бесплатно):</span><NavLink to={'tel:+7 (495) 461-00-99'}>+7 (495) 461-00-99</NavLink></div>
           <div><span>Телефон (Viber, WhatsApp, Telegram):</span><NavLink to={'tel:+7 (964) 860-60-00'}> +7 (964) 860-60-00</NavLink></div>
            <div><span>Адрес производства:</span> Республика Марий Эл, с. Кокшайск 56.155468, 47.817245</div>
            <div><span>Адрес офиса:</span>424000, Йошкар Ола, Ленинский проспект 25, офис 242</div>
            <div><span>E-mail:</span><NavLink to={'emailto:info@gmail.com'}>info@gmail.com</NavLink></div>
            <div><span>ООО "Тайга"</span></div>
            <div><span>ОГРН: 1131215000179</span></div>
            <div><span>ИНН: 1215169087</span></div>
            <div><span>КПП: 121501001</span></div>
        </div>
    </div>
  )
}

export default ContactsPage