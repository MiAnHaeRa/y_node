import { useEffect, useState } from "react";

export default function Fetch() {
    const [todos, setTodos] = useState([]);

    const url = process.env.NEXT_PUBLIC_TODO_URL;
    function callAPI() {
        fetch(url)
            .then(result => result.json())
            .then(result => setTodos(result))
    }

    useEffect(() => {
        callAPI();
        console.log(todos)
    }, [])

    return (
        <>
            <div>fetch</div>
            {todos.map(todo => (
                <p key={todo.id}>{todo.title}</p>
            ))}
        </>
    );
}