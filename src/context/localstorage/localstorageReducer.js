import { SHOW_LOADER, ADD_TERMINAL, REMOVE_TERMINAL, FETCH_TERMINAL, FETCH_BUYER, SORT_BUYER } from '../types'

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_TERMINAL]: (state, {payload}) => ({
        ...state,
        terminals: [...state.terminals, payload],
        loading: false
    }),
    [FETCH_TERMINAL]: (state, {payload}) => ({...setTimeout, terminals: payload, loading: false}),
    [FETCH_BUYER]: (state, {payload}) => ({...setTimeout, buyers: payload, loading: false}),
    [REMOVE_TERMINAL]: (state, {payload}) => ({
        ...state,
        terminals: state.terminals.map(
            terminal => {return terminal}
            ).filter(
                terminal => terminal.id !== payload
                )
    }),
    DEFAULT: state => state
}

export const localstorageReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}