import { useEffect, useState } from "react"

// Задан массив, передающий элементы в виде объекта
const goodsList = {
    goods : [
    {id: 1, name: 'Велосипед', count: 3},
    {id: 2, name: 'Самокат', count: 7},
    {id: 3, name: 'Ролики', count: 1}
]
}


const [goods, setGoods] = useState(goodsList?.goods)

useEffect(()=>{
    let goods = localStorage.getItem('goods')
    setGoods(JSON.parse(goods))
},[])

useEffect(()=>{
    localStorage.setItem('goods', JSON.stringify(goods))
},[goods])

const PLUS = 'PLUS'
const MINUS = 'MINUS'

const goodsReducer = (state = goodsList, action, id) => {
    setGoods(todos.map(elem => {
        if (elem.id == id){
            switch (action.type) {
                case PLUS:
                    return {...state, count: state.count + 1, payload: id}
                case MINUS:
                    return {...state, count: state.count - 1, payload: id}
                default:
                    return state
            }
        }
    }))
}


// Ниже указан пример разметки 

// Велосипед              -   3   +
// Самокат                -   7   +
// Ролики                 -   1   +

// Для каждого товар необходимо сформировать кнопки + -, которые будут менять 
// сво-во count (инкрементировать или декрементировать)


// 1 подказка - в payload tнобходимо передать ID
// 2 подсказка - Todo-проект. Посмотрите на функцию changeTodo()

export const plusOne = (payload) => ({type: PLUS, payload})
export const minusOne = (payload) => ({type: MINUS, payload})

export default goodsReducer