
import { configureStore, createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: { username: '홍길동', email: 'hong1234@gmail.com' },
    reducers: {
        setUsername: (state, action) => { state.username = action.username },
        setEmail: (state, action) => { state.email = action.email },
    }
})

//redux toolkit
const countSlice = createSlice({
    name: 'countSlice',
    initialState: { count: 0 },
    reducers: {
        up: (state, action) => {
            //state.count += action.inc;
            state.count += action.payload;
        },
        down: (state, action) => {
            //state.count -= action.inc;
            state.count -= action.payload;
        },
    },
});

let store = configureStore({
    reducer: {
        counter: countSlice.reducer,
        login: loginSlice.reducer,
    },
});

export { countSlice, loginSlice, store };