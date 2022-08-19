import laptop from './laptop.jpg';

const TodoCreateTask = () => {
    return ( 
    <>
        <h1 className='text-4xl text-slate-800 font-bold mb-5'>Create new task</h1>
        <div className=''>
            <label className='font-medium text-slate-800 block' htmlFor="create">Task Name</label>
            <input id="create" className='bg-gray-200 px-4 py-3 rounded-xl text-slate-900 w-full mt-4' type="text" placeholder="Lunch rocket to the moon" />
            <button className='bg-violet-700 hover:bg-violet-900 text-white py-2 px-3 rounded-2xl inline-block mt-4 w-32'>Create Task</button>
        </div>
        <div className='mt-12'>
            <img src={laptop} alt="people working"/>
        </div>
    </> );
}
 
export default TodoCreateTask;