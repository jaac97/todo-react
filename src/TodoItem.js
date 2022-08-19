const TodoItem = ({text}) => {
    return ( 
    <>
    <li className="bg-white rounded-3xl w-10/12 flex p-3 items-center">
        <button className="p-1.5 bg-gradient-to-b from-indigo-500 to-blue-500  rounded-full">
            <span className="block rounded-full p-3 bg-white"></span>
        </button>
        <p className="ml-4 ">{text}</p>
    </li>
    </> );
}
 
export default TodoItem;