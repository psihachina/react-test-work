import React, { useReducer } from 'react'
import { LocalstorageContext } from './localstorageContext'
import { localstorageReducer } from './localstorageReducer'
import { SHOW_LOADER, REMOVE_TERMINAL, FETCH_TERMINAL, ADD_TERMINAL } from '../types'

export const LocalstorageState = ({ children }) => {
    const initialState = {
        terminals: [],
        loading: false
    }

    const [state, dispatch] = useReducer(localstorageReducer, initialState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const fetchTerminals = () => {
        showLoader()
        const res = JSON.parse(localStorage.getItem("terminals"))
        if (res == null) {
            console.log(typeof(res));
            console.log(res);
           return
        }
        const payload = Object.keys(res).map(key => {
            return {
                ...res[key],
                id: key
            }
        })
        dispatch({ type: FETCH_TERMINAL, payload })
        console.log(res);
    }

    const addTerminal = async (title, desc) => {
        const terminal = {
            title, desc
        }

        try {
            let terminals = JSON.parse(localStorage.getItem("terminals"))

            console.log(typeof(terminals));

            if ((typeof(terminals) == String || undefined) || terminals == null) {
                console.log('op');
                terminals = []
            }

            terminals.push(terminal)

            console.log(terminals);

            localStorage.setItem("terminals", JSON.stringify(terminals))


            var res = terminals[terminals.length - 1]

            const payload = {
                ...terminal,
                id: res.title
            }
            dispatch({
                type: ADD_TERMINAL,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeTerminal = id => {
        var terminals = JSON.parse(localStorage.getItem("terminals"))
        terminals = terminals.map(function(e) { return e; }).filter(terminal => terminal.title != id)
        localStorage.setItem("terminals", JSON.stringify(terminals))
        console.log(terminals);
        
        dispatch({
            type: REMOVE_TERMINAL,
            payload: id
        })
    }

    return (
        <LocalstorageContext.Provider value={{
            showLoader, addTerminal, removeTerminal, fetchTerminals,
            loading: state.loading,
            terminals: state.terminals
        }}>
            {children}
        </LocalstorageContext.Provider>
    )
}