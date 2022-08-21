import { useState } from 'react';

import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import TodoCreateTask from "./TodoCreateTask";



const defaultTodos = [

  {id: 1, text: 'Cortar cebolla', completed: false},
  {id: 2, text: 'Tomar curso', completed: false},
  {id: 3, text: 'Llorar con la llorona', completed: false},
  {id: 4, text: 'Algo', completed: true},


];
function App(props) {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;
  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()) ? todo : '')

  }
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
  const deleteTodo = (e,text) => {
    e.stopPropagation();
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);

    setTodos(newTodos);
  }
  return (
    <div className="main bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-between  ">
      <div className="container mx-auto mt-12 h-full flex justify-evenly gap-16 ">
          <div className="left bg-slate-50 p-10 rounded-2xl w-2/5 shadow-xl">
            <TodoCreateTask />
          </div>
          
          <div className="right w-2/5 text-center">
            <TodoCounter 
              total={totalTodos}
              completedTodos={completedTodos}

            />      
            <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoList >
                {searchedTodos.map(todo =>( <TodoItem key={todo.id} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={(e) => deleteTodo(e,todo.text)}/>))} 
            </TodoList> 
          </div> 
      </div>
    </div>
  );
}

export default App;
