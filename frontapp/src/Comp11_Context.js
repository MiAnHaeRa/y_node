import { createContext, useContext } from 'react';

const themeDefault = { boarder: "10px solid yellow" };
const themeContext = createContext(themeDefault);

function Sub1() {
    const theme = useContext(themeContext);
    return (
        <themeContext.Provider value={{ boarder: '10px solid red' }}>
            <div style={theme}>
                <h1>Sub1</h1>
                <Sub2 />
            </div>
        </themeContext.Provider>
    );
}

function Sub2() {
    return (
        <div>
            <h1>Sub2</h1>
            <Sub3 />
        </div>
    );
}

function Sub3() {
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>Sub3</h1>
        </div>
    );
}

export default function App() {
    const theme = useContext(themeContext);
    return (
        <div className="root" style={theme}>
            <h1>Hello</h1>
            <Sub1 />
        </div>
    );
}