import { MdCheck } from "react-icons/md";

const TodoItem = ({text, completed}) => {
    return ( 
    <>
        <li className="bg-white rounded-3xl w-10/12 flex p-3 items-center">
            <button className="h-7 w-7 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full text-center">
                <span className={`flex rounded-full h-5 w-5  mx-auto ${completed ? "bg-green-300 justify-center items-center":"bg-white"}`}>{completed && <MdCheck />}</span> 
            </button>
                <p  className={`ml-4 ${completed && "line-through text-neutral-700"}`}>{text}</p>
        </li>
    </> );
}
 
export default TodoItem;