import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { LocalstorageContext } from '../context/localstorage/localstorageContext'

export const Form = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const alert = useContext(AlertContext)
    const localstorage = useContext(LocalstorageContext)
    const submitHandler = event => {
        event.preventDefault()
        if (title.trim() && desc.trim()) {
            localstorage.addTerminal(title, desc).then(()=>{
                alert.show('Терминал был добавлен', 'success')
            }).catch(()=>{
                alert.show('Что-то пошло не так', 'danger')
            })
            setTitle('')
            setDesc('')
        } else {
            alert.show('Введите название и описание терминала')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label>Название терминала</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название терминала"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Описание</label>
                <textarea
                    className="form-control"
                    placeholder="Введите описание"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                ></textarea>
            </div>
            <button className="btn btn-light" type="submit">Добавить</button>
        </form>
    )
}