import { Button } from "react-bootstrap";
import { Provider, useDispatch, useSelector } from "react-redux";
import {countSlice, store } from './store'
import { legacy_createStore as createStore } from "redux";

/*
//기존 redux
function reducer(state, action) {
    if(action.type === "up") {
        return {...state, count : state.count + action.inc};
    }

    return state;
}

const initialState = {count : 0}
let store = createStore(reducer, initialState);
*/



function Counter() {
    const dispatcher = useDispatch();
    //const cnt = useSelector(state => state.count);
    const cnt = useSelector(state => state.counter.count);

    return(
        <div>
            <Button variant="danger" onClick={() => { 
                //dispatcher({type : "up", inc : 2})
                //dispatcher({type : "countSlice/up", inc : 2})
                dispatcher(countSlice.actions.up(2))
                }}>+</Button> 
                {cnt}
            <Button variant="primary" onClick={() => { 
                dispatcher(countSlice.actions.down(2))
                }}>-</Button> 
        </div>
    );
}

function MyPage() {
    const dispatch = useDispatch();
    const loginInfo = useSelector(state => state.login);
    return(
        <>
            <div>
                {
                    //<input type="text" onChange={(e) =>{dispatch({type : "loginSlice/setUsername", username : e.target.value})}} />
                }
                <input type="text"/> <button type="button" onClick={(e) => {console.log(e)}}>수정</button>
                <h2>이름 : {loginInfo.username}</h2>
                <h2>이메일 : {loginInfo.email}</h2>
            </div>
        </>
    );
}

export default function App() {
    return (
        <>
            <Provider store={store}>
                <Counter></Counter>
                <MyPage></MyPage>
            </Provider>
        </>
    );
}