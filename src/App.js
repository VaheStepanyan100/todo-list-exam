import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handChangeTodo(nextTodo) {
    setTodos(todos.map(todo => {
      if (todo.id === nextTodo.id) {
        return nextTodo;
      } else {
        return todo;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  function handleDeleteMarked() {
    setTodos(todos.filter(todo => !todo.done));
  }

   return (
    <div>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
      <button onClick={handleDeleteMarked}>Delete Marked</button>
    </div>
   );
}

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Learn JS', done: true },
  { id: 1, title: 'Learn React', done: false },
  { id: 2, title: 'Learn TypeScript', done: false }
]

export default App;
