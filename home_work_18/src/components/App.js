// Мини-задание в файле goodsReducer

import './App.css'

import { useSelector, useDispatch } from "react-redux"
import { fetchEmployeesList1, fetchEmployeesList2 } from "../asyncActions/employees"

// импорт экшн-генераторов
import { decrAction, incrAction } from "../store/countReducer"
import { addEmplAction, remEmplAction, remEmplByIdAction } from "../store/emplReducer"
import { minusOne, plusOne } from "../store/goodsReducer"



function App(){
    // Хук useSelector позволяет получить любое состояние с хранилища store
    let count = useSelector(store => store.count.count)
    let empl = useSelector(store => store.empl.empl)
    let goods = useSelector(store => store.goods.goods)
    // dispatch позволяет указать команду (type) для reducer
    let dispatch = useDispatch()

    return(
        <div>
            <h1>Счетчик</h1>
            {count}
            <div>
                <button onClick={()=> dispatch(incrAction(+prompt()))}>Инкремент</button>
                <button onClick={()=> dispatch(decrAction(+prompt()))}>Декремент</button>
            </div>
            <h1>Сотрудники</h1>
            {/* 
                Метод map, помимо elem, также может передавать index
                Таким образом, редьюсер будет получать уникальное значение идентификатора элемента массива
            */}
            {empl.map((elem, index) => 
                <div 
                    key={index} 
                    // onDoubleClick={() => dispatch(remEmplByIdAction(elem.id))
                    onDoubleClick={() => dispatch(remEmplByIdAction(index))}
                >
                    <h3>{elem.name}</h3>
                    <p>{elem.id}</p>
                </div>
            )}
            <div>
                <button onClick={()=> dispatch(addEmplAction(prompt()))}>Добавить нового пользоватетя</button>
                <button onClick={()=> dispatch(remEmplAction())}>Удалить последнего пользователя</button>
                <button onClick={()=> dispatch(remEmplByIdAction(+prompt()))}>Удалить пользователя по id</button>
                <div>
                    <button onClick={() => dispatch(fetchEmployeesList1())}>Добавить список сотрудников (1)</button>
                    <button onClick={() => dispatch(fetchEmployeesList2())}>Добавить список сотрудников (2)</button>
                </div>
            </div>
            <h3>Goods</h3>            
            {goods.map(elem =>
            <div className="goods">
                <p className='name'>{elem.name}</p>
                <button onClick={() => dispatch(plusOne())}>+</button>
                <p>{elem.count}</p>
                <button onClick={() => dispatch(minusOne())}>-</button>        
            </div>
            )}            
        </div>
    )
}

export default App