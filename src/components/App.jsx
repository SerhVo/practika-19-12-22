import { TodoForm } from "./TodoForm/TodoForm";
import { Todolist } from "./TodoList/Todolist";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <TodoForm />
      <Todolist />
    </div>
  );
};
