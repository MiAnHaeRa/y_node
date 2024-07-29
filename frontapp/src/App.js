import Toolbar from './Event';
import './App.css';

//컴포넌트
function Header({ title, color = "black", onChangeMode }) {
  function clickHandler(e) {
    e.preventDefault();
    alert("클릭됨")
    onChangeMode();
  }
  return (
    <header>
      <h2 style={{ color: color }}><a href='/' onClick={clickHandler}>{title}</a></h2>
    </header>
  );
};

function Nav({ topics }) {
  // const lis = [];
  // for(let i=0; i < topics.length; i++) {
  //   lis.push(<li>{topics[i].title}</li>)
  // }

  const lis = topics.map(topic => (<li key={topic.title}>{topic.title}</li>))

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
};

function Article({ content, fruits }) {
  return (
    <article>
      <h2>{content.title}</h2>
      <Profile name="톰" width="100" height="100" src="logo192.png" />
      {content.body} {content.name}
      <ul>
        {fruits.map((fruit, idx) => (<li key={idx}>{fruit}</li>))}
      </ul>
    </article>
  );
};

function Avatar({ name, width, height, src }) {
  return (
    <img
      className="avatar"
      src={src}
      alt={name}
      width={width}
      height={height}
    />
  );
}

function Profile(props) {
  return <Avatar {...props} />;
};

const topics = [
  { id: 1, title: "한식", body: "한식 is..." },
  { id: 2, title: "중식", body: "중식 is..." },
  { id: 3, title: "양식", body: "양식 is..." },
  { id: 4, title: "일식", body: "일식 is..." },
];

function App() {
  return (
    <div className="App">
      <Header title="WEB" color="red" onChangeMode={() => {
        alert("on change mode");
      }} />
      <Nav topics={topics} />
      <Toolbar />
      <Article content={{ title: "오점머", body: "오른쪽은 치킨 왼쪽은?", name: "Tom" }}
        fruits={['바나나', '사과', '포도']} />
      <Header title="WEB" />
    </div>
  );
}

export default App;
