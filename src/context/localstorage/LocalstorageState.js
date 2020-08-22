import React, { useReducer } from 'react'
import axios from 'axios'
import { LocalstorageContext } from './localstorageContext'
import { localstorageReducer } from './localstorageReducer'
import { SHOW_LOADER, REMOVE_TERMINAL, FETCH_TERMINAL, ADD_TERMINAL, FETCH_BUYER } from '../types'

export const LocalstorageState = ({ children }) => {
    const initialState = {
        terminals: [],
        buyers: [],
        loading: false
    }

    const [state, dispatch] = useReducer(localstorageReducer, initialState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const fetchTerminals = async () => {
        showLoader()


        const res = await axios.get('https://json-server-psih.herokuapp.com/terminals');
        console.log(res.data);
        const payload = await Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        await dispatch({ type: FETCH_TERMINAL, payload })
    }

    const fetchBuyers = async () => {
        showLoader()

        const res = await axios.get('https://json-server-psih.herokuapp.com/buyers');

        const payload = await Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        await dispatch({ type: FETCH_BUYER, payload })
    }

    const addTerminal = async (title, desc) => {
        const terminal = {
            title, desc
        }

        try {
            const res = await axios.post('https://json-server-psih.herokuapp.com/terminals', terminal)
            console.log(res);
            const payload = {
                ...terminal,
                id: res.data.id
            }
            dispatch({
                type: ADD_TERMINAL,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeTerminal = async id => {
        console.log(12);

        const res = await axios.delete(`https://json-server-psih.herokuapp.com/terminals/${id}`)
        console.log(res);
        dispatch({
            type: REMOVE_TERMINAL,
            payload: id
        })
    }

    return (
        <LocalstorageContext.Provider value={{
            showLoader, addTerminal, removeTerminal, fetchTerminals, fetchBuyers,
            loading: state.loading,
            terminals: state.terminals,
            buyers: state.buyers
        }}>
            {children}
        </LocalstorageContext.Provider>
    )
}