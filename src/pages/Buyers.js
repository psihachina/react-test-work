import React, { Fragment, useContext, useEffect, useState } from 'react'
import { BuyerList } from '../components/BuyerList'
import { Loader } from '../components/Loader'
import { LocalstorageContext } from '../context/localstorage/localstorageContext'

export const Buyers = () => {
    const { loading, buyers, fetchBuyers } = useContext(LocalstorageContext)

    const columns = React.useMemo(
        () => [
            {
                Header: 'ID покупателя',
                accessor: 'id',
                disableFilters: true,
                disableSortBy: true
            },
            {
                Header: 'Имя',
                accessor: 'name',
                disableSortBy: true
            },
            {
                Header: 'Средний чек',
                accessor: 'avg',
                disableFilters: true,
            },
            {
                Header: 'Количество покупок',
                accessor: 'number',
                disableFilters: true
            },
            {
                Header: 'Общая выручка',
                accessor: 'total',
                disableFilters: true
            }
        ],
        []
    )
    
    
    const data = React.useMemo(() => {
        if(buyers && buyers !== null) return buyers
        else return []
    })



    useEffect(() => {
        fetchBuyers()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <h1>Покупатели</h1>
            {loading
                ? <Loader />
                : <BuyerList data={data} columns={columns} />
            }
        </Fragment>
    )
}