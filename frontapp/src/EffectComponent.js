import { useState, useEffect } from 'react';

function Todo({ todos }) {
    return (
        <>
            {todos.map(todo => (<div key={todo.id}>{todo.title}</div>))}
        </>
    );
}

export default function EffectComponent() {
    let [count, setCount] = useState(1);
    let [todos, setTodos] = useState([]);
    function callAPI() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setTodos(json);     //state 변경하면 리랜더링
            })
    }

    //랜더링 후에 한번만 실행하도록
    useEffect(() => {       // dom update => 함수실행(EffectComponent) => useEffect
        console.log("effect");
        //callAPI();
        return () => {
            console.log("clean up");
        }
    }, [count])      //[]안에 있는 변수가 변경될시 다시 실행

    return (
        <>
            <h1>side effect(부수효과)</h1>
            <div>{count}</div>
            <div>
                <Todo todos={todos} />
            </div>
        </>
    );
};
