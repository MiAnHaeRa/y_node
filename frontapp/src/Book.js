import { useState } from "react";

function Header(props) {
    console.log(props);

    function clickHandler(e) {
        e.preventDefault();
        props.onChangMode();
    }

    return (
        <>
            <header>
                <h1><a href="/" onClick={clickHandler}>{props.title}</a></h1>
            </header>
        </>
    );
};

function Nav({ topics, onChangMode }) {
    function clickHandler(e) {
        e.preventDefault();
        onChangMode(e.target.id);
    }
    return (
        <nav>
            <ol>
                {topics.map((topic) => (
                    <li key={topic.id}><a id={topic.id} href={"/read/" + topic.id} onClick={clickHandler}>{topic.title}</a> 설명 :  {topic.body}</li>
                )
                )}
            </ol>
        </nav>
    );
};

function Article({ title, body }) {
    return (
        <article>
            <h2>{title}</h2>
            {body}
        </article>
    );
}

function Create({ onCreate }) {
    function btnClick(e) {
        e.preventDefault();
        let title = e.target.title.value;
        let body = e.target.body.value;
        onCreate(title, body);
        e.target.title.value = ""
        e.target.body.value = ""
    }
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={btnClick} method="post">
                <p><input type="text" name="title" placeholder="title" /></p>
                <p><textarea name="body" placeholder="body" ></textarea></p>
                <p><input type="submit" value="Create" /></p>
            </form>
        </article>
    );
};

function Update(props) {
    return (
        <article>
            <h2>Update</h2>
            <form>
                <p><input type="text" name="title" placeholder="title" value={props.title} /></p>
                <p><textarea name="body" placeholder="body" value={props.body} ></textarea></p>
                <p><input type="submit" value="Update" /></p>
            </form>
        </article>
    );
};

export default function Book() {
    let [topics, setTopics] = useState([
        { id: 1, title: "한식", body: "한식은..." },
        { id: 2, title: "일식", body: "일식은..." },
        { id: 3, title: "중식", body: "중식은..." },
        { id: 4, title: "양식", body: "양식은..." },
    ]);

    let [mode, setmode] = useState("WELCOME");
    let [id, setId] = useState(2);
    let [seq, setSeq] = useState(5);
    let content;
    if (mode === "WELCOME") {
        content = (
            <>
                <Article title="Welcome" body="Hello, React" />
                <button onClick={() => setmode("CREATE")} >create</button >
            </>
        );
    } else if (mode === "CREATE") {
        content = <Create onCreate={(title, body) => {
            setTopics([...topics, { id: seq, title, body }])
            setSeq(seq + 1);
        }} />;
    } else if (mode === "READ") {
        let { title, body } = topics.find(topic => id === topic.id);
        content = (
            <>
                <Article title={title} body={body} />
                <button onClick={() => setmode("UPDATE")} >update</button >
            </>
        );
    } else if (mode === "UPDATE") {
        content = <Update title="" body="" />;
    }

    return (
        <>
            <Header title="React" onChangMode={() => {
                setmode("WELCOME")
            }} />
            <Nav topics={topics} onChangMode={(_id) => {
                setmode("READ");
                setId(Number(_id))
            }} />
            {content}
        </>
    );
};