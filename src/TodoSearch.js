import { MdSearch } from "react-icons/md";
import { IconContext } from "react-icons";

const TodoSearch = () => {
  
    return ( 
    <IconContext.Provider value={{ size: "2rem", className:"todo__search" }}>
        <span className='todo__searchContainer'>
                <input className="todo__searchInput px-4 py-4 rounded-2xl w-6/12 my-3 shadow-lg shadow-indigo-500/40" placeholder="Search ..." />
                <MdSearch />
        </span>
    </IconContext.Provider>
    );
}
 
export default TodoSearch;