import {applyMiddleware, combineReducers, createStore} from 'redux'
import { countReducer } from './countReducer'
import { emplReducer } from './emplReducer'
import goodsReducer from './goodsReducer'

import thunk from 'redux-thunk'



// rootReducer - объект. который хранит все редьюсеры
const rootReducer = combineReducers({
    count: countReducer,
    empl: emplReducer,
    goods: goodsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))