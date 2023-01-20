const defaultState = {
    empl: [
        {id: 1, name: 'ALex'},
        {id: 2, name: 'Steven'},
        {id: 3, name: 'Neena'}
    ]
}

const ADD_EMPL = 'ADD_EMPL'
const REM_EMPL = 'REM_EMPL'
const REM_BY_ID = 'REM_BY_ID'

export const emplReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_EMPL:
            return {...state, empl: [...state.empl, {id: Date.now(), name: action.payload}]}
        case REM_EMPL:
            return {...state, empl: state.empl.slice(0,state.empl.length-1)}
        case REM_BY_ID:
            return {...state, id: action.payload, empl: state.empl.slice(0,state.empl.id-1,1), } 
        default:
            return state
    } 
}

export const addEmplAction = (payload) => ({type: ADD_EMPL, payload})
export const remEmplAction = () => ({type: REM_EMPL})
export const remByIdAction = (payload) => ({type: REM_BY_ID, payload})