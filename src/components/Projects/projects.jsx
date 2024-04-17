import React, { useEffect } from 'react'
import './projects.scss'
import { NavLink } from 'react-router-dom'
import CardButton from '../Cards/CardButton/cardButton'
import { useDispatch, useSelector } from 'react-redux'
import { getCatalog } from '../../redux/slice/catalog-slice'
import { api } from '../../Api'


function Projects() {

    const dispatch = useDispatch()
    const datas = useSelector(state => state.catalogSlice)

    useEffect(() => {
        dispatch(getCatalog())
    }, [])

    console.log(datas);

    return (
        <div className='projects'>
            <span>посмотрите проекты домов</span>
            <div className='masonry-container'>
                {datas.catalog.map((item) => {
                    const baseUrl = `${api.defaults.baseURL}/uploads/${item.photo}`
                    return (
                        <div className='masonry' key={item.id}>
                            <div style={{ maxWidth: '450px', minHeight: '300px' }}>
                                <img src={baseUrl} alt="image" />
                            </div>
                            <span>{item.projectName}</span>
                            <div>
                                <p>{item.area}</p>
                                <p>{item.price} руб.</p>
                            </div>
                            <div className='buttons'>
                                <NavLink to={`/detail-page/${item._id}`}><CardButton text='ПОДРОБНЕЕ' /></NavLink>
                                <button><NavLink to={'/calculator'}>УЗНАТЬ СТОИМОСТЬ</NavLink></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Projects