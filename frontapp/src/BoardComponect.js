import { Routes, Route, NavLink } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import BoardList from './Board/BoardList';
import BoardInfo from './Board/BoardInfo';
import BoardInsert from './Board/BoardInsert';
import BoardUpdate from './Board/BoardUpdate';

export default function BoardComponent() {
    return (
        <Container>
            <Row>
                <ul className='list-group list-group-horizontal'>
                    <li className='list-group-item'><NavLink to="/">Home</NavLink></li>
                    <li className='list-group-item'><NavLink to="/list">게시판</NavLink></li>
                    <li className='list-group-item'><NavLink to="/boardInsert">게시글등록</NavLink></li>
                </ul>
            </Row>
            <Routes>
                <Route path='/' element={"Welcome BoardComponent"}></Route>
                <Route path='/list' element={<BoardList />}></Route>
                <Route path='/info/:seq' element={<BoardInfo />}></Route>
                <Route path='/boardInsert' element={<BoardInsert />}></Route>
                <Route path='/update/:seq' element={<BoardUpdate />}></Route>
            </Routes>
        </Container>
    );
}