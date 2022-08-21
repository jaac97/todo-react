import { MdCheck } from "react-icons/md";

const TodoItem = ({text, completed}) => {
    return ( 
    <>
        <li className="bg-white rounded-3xl w-10/12 flex p-3 items-center">
            <button className="h-7 w-7 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full text-center">
                {completed  === false ?
                <span className="block rounded-full h-5 w-5 bg-white mx-auto"> </span> :
                <span className="h-5 w-5 bg-green-300 rounded-full mx-auto flex justify-center items-center">{<MdCheck />}</span> } 
            </button>
              
                <p  className={`ml-4 ${completed && "line-through text-neutral-700"}`}>{text}</p>
        
        </li>
    </> );
}
 
export default TodoItem;