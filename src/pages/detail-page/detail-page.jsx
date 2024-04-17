import React, { useEffect } from 'react'
import './detail-page.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getCatalog } from '../../redux/slice/catalog-slice'
import { useParams } from 'react-router-dom'
import { api } from '../../Api'

export const DetailPage = () => {

    const { id } = useParams()

    const dispatch = useDispatch()
    const datas = useSelector(state => state.catalogSlice)

    const filteredData = datas.catalog.filter(item => item._id == id)

    useEffect(() => {
        dispatch(getCatalog())
    }, [])

    return (
        <>
            {filteredData.map((item) => {
                const baseURL = `${api.defaults.baseURL}/uploads/${item.photo}`
                return (
                    <div className="detailPage" key={item.id}>
                        <div className='images'>
                            <div className='image'>
                                <img src={baseURL} alt="image" />
                            </div>
                        </div>
                        <div className='content'>
                            <div className='title'>
                                <h3>{item.projectName}</h3>
                                <b>Параметры проекта:</b>
                                <p>{item.parameters}</p>
                            </div>
                            <div className='description'>
                                <b>Описание проекта:</b>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
