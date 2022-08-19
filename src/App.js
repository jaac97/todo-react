import TodoCounter from "./TodoCounter";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import TodoSearch from "./TodoSearch";
import CreateTodoButton from "./CreateTodoButton";
import TodoCreateTask from "./TodoCreateTask";



const todos = [
  {id: 1, text: 'Cortar cebolla', completed: false},
  {id: 2, text: 'Tomar curso', completed: false},
  {id: 3, text: 'Llorar con la llorona', completed: false},

];
function App(props) {

  return (
   <div>
      <div>
        <TodoCreateTask />
      </div>
      <div>
        <TodoSearch />
        <TodoCounter />      
        <TodoList >
            {todos.map(todo =>( <TodoItem key={todo.id} text={todo.text}/>))} 
        </TodoList> 
        <CreateTodoButton />
      </div> 
    </div>
  );
}

export default App;
