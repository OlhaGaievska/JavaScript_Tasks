const defaultState = {
    empl: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Steven'},
        {id: 3, name: 'Neena'}
    ]
}

const ADD_EMPL = 'ADD_EMPL'
const REM_EMPL = 'REM_EMPL'
const REM_EMPL_BY_ID = 'REM_EMPL_BY_ID'
const ADD_EMPL_ARRAY = 'ADD_EMPL_ARRAY'

export const emplReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_EMPL:
            return {...state, empl: [...state.empl, {id: Date.now(), name: action.payload}]}
        case REM_EMPL:
            return {...state, empl: state.empl.slice(0,state.empl.length-1)}
        case REM_EMPL_BY_ID:
            // return {...state, empl: state.empl.filter((elem) => elem.id != action.payload)}
            // удаление по id формирует проблемы, когда запросы формируют элементы
            // с id, которое уже находятся в сторе. Для решение этой проблемы мы 
            // реализовали удаление по индексу, который у каждого элемента уникален
            return {...state, empl: state.empl.filter((elem, index) => index != action.payload)}
        case ADD_EMPL_ARRAY:
            return {...state, empl: [...state.empl, ...action.payload]}
        default:
            return state
    } 
}

export const addEmplAction = (payload) => ({type: ADD_EMPL, payload})
export const remEmplAction = () => ({type: REM_EMPL})
export const remEmplByIdAction = (payload) => ({type: REM_EMPL_BY_ID, payload})
export const AddEmplArrayAction = (payload) => ({type: ADD_EMPL_ARRAY, payload})