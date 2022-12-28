import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addTodoAction } from "redux/actions";


export const TodoForm = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const todo = {
            title, description, id: nanoid(), isDone: false
        }
        dispatch(addTodoAction({ todo }));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" />
            <input type="text" name="description" />
            <button type="submit">addTodo</button>
        </form>

    )

}