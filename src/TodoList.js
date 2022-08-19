const TodoList = ({children}) => {
    return ( <>
        <section>
            <ul className="flex flex-col gap-4 justify-center items-center">
                {children}
            </ul>
        </section>
    </> );
}
 
export default TodoList;