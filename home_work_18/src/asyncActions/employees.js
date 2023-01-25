import { AddEmplArrayAction } from "../store/emplReducer"


// Асихнронный запрос формируется в виде функции, которая возвращает функцию
// внутри результата (функции) выполняется запрос, который после выполнения запроса вызывает 
// экшн-генератор dispatch(AddEmplArrayAction())

export const fetchEmployeesList1 = () => {
    return function(dispatch){
        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(AddEmplArrayAction(data)))
    }
} 

export const fetchEmployeesList2 = () => {
    return function(dispatch){
        let url = 'https://dummyjson.com/users'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // data в аргументе - это объект. Внутри объекта сво-во users передает нужный массив

                // Добавляем к каждому элементу новое сво-во name,
                // т.к. компонент App циклично возвращает div со сво-вом elem.name
                data = data.users.map(elem => ({...elem, name: elem.firstName}))
                dispatch(AddEmplArrayAction(data))
            })
    }
} 