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
    <div className="main bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-between  ">
      <div className="container mx-auto mt-12 h-full flex justify-evenly gap-16 ">
          <div className="left bg-slate-50 p-10 rounded-2xl w-2/5 shadow-xl">
            <TodoCreateTask />
          </div>
          <div className="right w-2/5 text-center">
            <TodoCounter />      
            <TodoSearch />
            <TodoList >
                {todos.map(todo =>( <TodoItem key={todo.id} text={todo.text}/>))} 
            </TodoList> 
            <CreateTodoButton />
          </div> 
      </div>
    </div>
  );
}

export default App;
