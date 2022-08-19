import laptop from './laptop.jpg';

const TodoCreateTask = () => {
    return ( 
    <>
        <h1>Create new task</h1>
        <div >
            <label htmlFor="create">Task Name</label>
            <input id="create" type="text" placeholder="Lunch rocket to the moon" />
            <button>Create Task</button>
        </div>
        <div >
            <img src={laptop} alt="people working"/>
        </div>
    </> );
}
 
export default TodoCreateTask;