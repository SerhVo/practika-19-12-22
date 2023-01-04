
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, updateTodoAction } from "redux/actions";

export const Todolist = () => {
    const todos = useSelector((state) => { return state.todos })
    const dispatch = useDispatch()
    console.log(todos)
    return < ol > {
        todos.map(elem => <li key={elem.id}>
            <p>{elem.title}</p>
            <p>{elem.description}</p>
            <input type="checkbox" onChange={() => { dispatch(updateTodoAction({ todo: { ...elem, isDone: !elem.isDone } })) }} checked={elem.isDone} />
            <button type="button" onClick={() => { dispatch(deleteTodoAction({ id: elem.id })) }} >delete</button>
        </li>)
    }</ ol>
}