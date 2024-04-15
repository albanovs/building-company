import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <nav>
                    <ul>
                        <li><NavLink to={'/projects'}>Наши работы</NavLink></li>
                        <li><NavLink to={'#'}>О компании</NavLink></li>
                        <li><NavLink to={'/calculator'}>Расчитать стоимость</NavLink></li>
                        {/* <li><NavLink to={'/applicationPage'}>Оставить заявку</NavLink></li> */}
                        <li><NavLink to={'#'}>Контакты</NavLink></li>
                    </ul>
                </nav>
                <hr />
                <div className='footer-text'>
                    <span><NavLink to={'/'}>Avion© 2024. Все права защищены</NavLink></span>
                    <div className="footer-icons">
                        <NavLink target='_blank' to={'https://www.linkedin.com/'}><FaLinkedin /></NavLink>
                        <NavLink target='_blank' to={'https://www.facebook.com'}><FaFacebook /></NavLink>
                        <NavLink target='_blank' to={'https://www.instagram.com'}><FaInstagram /></NavLink>
                        <NavLink target='_blank' to={'https://www.skype.com'}><FaSkype /></NavLink>
                        <NavLink target='_blank' to={'https://www.twitter.com'}><FaTwitter /></NavLink>
                        <NavLink target='_blank' to={'https://www.pinterest.com'}><FaPinterest /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer