import React, { Fragment , useContext, useEffect} from 'react'
import { Form } from '../components/Form'
import { TerminalList } from '../components/ TerminalList'
import { LocalstorageContext } from '../context/localstorage/localstorageContext'
import { Loader } from '../components/Loader'

export const Terminals = () => {

    const {loading, terminals, fetchTerminals, removeTerminal} = useContext(LocalstorageContext)

    useEffect(() => {
        fetchTerminals()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <h1>Терминалы</h1>
            <Form />

            <hr/>

            {loading 
                ? <Loader />
                : <TerminalList terminals = {terminals} onRemove={removeTerminal}/>
            }

        </Fragment>
    )
}