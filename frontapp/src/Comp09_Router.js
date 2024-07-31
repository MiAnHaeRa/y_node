import { Routes, Route, NavLink, useParams } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    );
}

var contents = [
    { id: 1, title: "HTML", description: "HTML is.." },
    { id: 2, title: "JS", description: "JS is.." },
    { id: 3, title: "React", description: "React is.." },
];

function Topics() {
    let list = contents.map(con => (<li key={con.id}><NavLink to={"/topics/" + con.id}>{con.title}</NavLink></li>));
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {list}
            </ul>
            <Routes>
                <Route path="/:topic_id" element={<Topic />}></Route>
            </Routes>
        </div>
    );
}

function Topic() {
    let { topic_id } = useParams();
    let content = contents.find(content => content.id === Number(topic_id));

    return (
        <>{topic_id} {content.description}</>
    );
}

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Hello react router DOM</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/topics/*" element={<Topics />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/*" element={'Not Found'}></Route>
            </Routes>
        </div>
    );
}

export default App;