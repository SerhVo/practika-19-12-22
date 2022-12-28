import { addTodo, deleteTodo, updateTodo } from "./types";

const init = { todos: [] }
export const todoReducer = (state = init, action) => {
    switch (action.type) {
        case (addTodo):
            return {...state, todos: [...state.todos, action.payload] };
        case (deleteTodo):
            return {...state, todos: state.todos.filter((elem) => { return (elem.id !== action.payload) }) };
        case (updateTodo):
            return {...state, todos: state.todos.map(elem => elem.id === action.payload.id ? action.payload : elem) };
        default:
            return state;
    }
}