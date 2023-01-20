import { useSelector, useDispatch } from "react-redux"
// импорт экшн-генераторов
import { decrAction, incrAction} from "../store/countReducer"
import { addEmplAction, remByIdAction, remEmplAction } from "../store/emplReducer"


function App(){
    // Хук useSelector позволяет получить любое состояние с хранилища store
    let count = useSelector(store => store.count.count)
    let empl = useSelector(store => store.empl.empl)
    let id = useSelector(store => store.empl.id)
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
            {empl.map(elem=> 
            
                <div onClick={(dispatch(remByIdAction(id)))}>
                    <h3>{elem.name}</h3>
                </div>
            )}
            <div>
                <button onClick={()=> dispatch(addEmplAction(prompt()))}>Добавить нового пользоватетя</button>
                <button onClick={()=> dispatch(remEmplAction())}>Удалить последнего пользователя</button>
                
            </div>
        </div>
    )
}

export default App