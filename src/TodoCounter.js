const TodoCounter = ({total, completedTodos}) => {
    return ( <>
         <h2 className="text-7xl font-extrabold mx-auto text-transparent bg-clip-text  bg-gradient-to-r from-teal-800 to-orange-400">Your tasks
             <span className="block text-2xl text-slate-800 mt-2">Completed {completedTodos} to {total}</span>
         </h2>
    </> );
}
 
export default TodoCounter;