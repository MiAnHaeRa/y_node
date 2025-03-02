import { legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'

//1. reduce 선언
function reducer(currentState, action) {
    if (currentState === undefined) {
        return { number: 1 };
    }

    const newState = { ...currentState };     //스테이트 불변의 원칙 => 복제해서 변경 => 스테이트 교체
    if (action.type === "UP") {
        newState.number++;
    } else if (action.type === "DOWN") {
        newState.number--;
    }
    return newState;
}

//2. 스토어에 저장
const store = createStore(reducer, { number: 1 })

export default function App() {
    return (
        <div id="container">
            <h1>Root</h1>
            <div id="grid">
                <Provider store={store}>
                    <Left1></Left1>
                    <Right1></Right1>
                </Provider>
            </div>
        </div>
    );
};

function Left1(props) {
    return (
        <div>
            <h1>Left1</h1>
            <Left2></Left2>
        </div>
    );
}

function Left2(props) {
    return (
        <div>
            <h1>Left2</h1>
            <Left3></Left3>
        </div>
    );
}

function Left3(props) {
    const number = useSelector(state => state.number)
    return (
        <div>
            <h1>Left3 : {number}</h1>
        </div>
    );
}


function Right1(props) {
    return (
        <div>
            <h1>Right1</h1>
            <Right2></Right2>
        </div>
    );
}

function Right2(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Right2</h1>
            <button className='btn btn-danger' type='button' onClick={() => { dispatch({ type: "DOWN" }) }}>-</button>
            <Right3></Right3>
        </div>
    );
}

function Right3(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Right3</h1>
            <button className='btn btn-primary' type="button" onClick={() => { dispatch({ type: "UP" }) }}>+</button>
        </div>
    );
}