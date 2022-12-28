import { addTodo, deleteTodo, updateTodo } from "./types";

export const addTodoAction = ({ todo }) => { return { type: addTodo, payload: todo } }
export const deleteTodoAction = ({ id }) => { return { type: deleteTodo, payload: id } }
export const updateTodoAction = ({ todo }) => { return { type: updateTodo, payload: todo } }