import { useReducer, useState } from "react";
//상태 변경하는 과정을 리듀서 함수에 은닉

//reducer 함수 작성
function countReduce(oldCount, action) {
    if (action.type === "UP") {
        return oldCount + action.number;
    } else if (action.type === "DOWN") {
        return oldCount - action.number;
    } else if (action.type === "RESET") {
        return action.number;
    }
}

export default function App() {
    // let [count, setCount] = useState(0);
    const [count, countDispatch] = useReducer(countReduce, 0);

    function up() {
        // setCount(count + 1);
        countDispatch({ type: "UP", number: 10 });
    }
    function reset() {
        // setCount(0);
        countDispatch({ type: "RESET", number: 0 });
    }
    function down() {
        // setCount(count - 1);
        countDispatch({ type: "DOWN", number: 10 });
    }
    return (
        <div>
            <button type="button" onClick={down}> - </button>
            <button type="button" onClick={reset}> 0 </button>
            <button type="button" onClick={up}> + </button>
            <span>{count}</span>
        </div>
    );
}