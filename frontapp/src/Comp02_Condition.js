import Replies from "./Reply"

function Item({ name, isPacked, idx }) {
    return (
        <li className="item" key={idx}>
            {name} {isPacked && "✔"}
        </li>
    );
};

function Items({ todos }) {
    return todos.map((todo, idx) => <Item {...todo} key={idx} />);
}

export default function PackingList() {
    let todos = [
        { name: "Space suit", isPacked: true },
        { name: "Helmet with a golden leaf", isPacked: true },
        { name: "Photo of Tam", isPacked: false },
    ];

    let replyList = [
        { id: 1, title: "첫번째 글", writer: "홍길동" },
        { id: 2, title: "두번째 글", writer: "김유신" },
        { id: 3, title: "세번째 글", writer: "이기자" }
    ];

    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Items todos={todos} />
            </ul>
            <h2>댓글리스트</h2>
            <Replies datas={replyList} />
        </section>
    );
};