import React, {useState} from 'react';
import './App.css';

const initialTodos = [
  {
    title: "Learn React",
    done: false,
  },
  {
    title: "Homework",
    done: true,
  },
  {
    title: "Go out for a drink",
    done: false,
  },
];

const Todo = ({title,done,toggleDone,deleteTodo,index}) => {
  return (
    <div>
        <h3 className="thing">
          {done ? <strike>{title}</strike> : <span>{title}</span>}
          <button className="com-button" onClick={toggleDone.bind(this,index)}>&#10003;</button>
          <button className="del-button" onClick={deleteTodo.bind(this,index)}>&#10006;</button>
        </h3>
    </div>
  );
}

const TodoApp = ({initialTodos}) => {
  const [inputTodo,setInputTodo] = useState("");
  const [todos,setTodos] = useState(initialTodos);
  const updateInput = (e) => {
    setInputTodo(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: inputTodo,
      done: false
    };
    setInputTodo("");
    setTodos([...todos, newTodo]);
  };
  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1 className="title">To do app</h1>
      <form onSubmit={addTodo} className="form">
        <input type="text" value={inputTodo} onChange={updateInput}/>
        <button className="add-button" type="submit">Add</button>
      </form>
      <div className="todo">
        {todos.map((todo,index) => (
          <Todo title={todo.title} done={todo.done} toggleDone={toggleDone} deleteTodo={deleteTodo} index={index}/>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoApp initialTodos={initialTodos}/>
    </div>
  );
}

export default App;
