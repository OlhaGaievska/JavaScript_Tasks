const defaultState = {
    count: 0
}

const INCR = 'INCR'
const DECR = 'DECR'

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCR:
            return {...state, count: state.count + action.payload}
        case DECR:
            return {...state, count: state.count - action.payload}
        default:
            return state
    } 
}

// Экшн-генератор. Эта функция, которая возвращает готовый эшкн
export const incrAction = (payload) => ({type: INCR, payload})
export const decrAction = (payload) => ({type: DECR, payload})
