import { Routes, Route, NavLink } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
//board
import BoardList from './Board/BoardList';
import BoardInfo from './Board/BoardInfo';
import BoardInsert from './Board/BoardInsert';
import BoardUpdate from './Board/BoardUpdate';
//customer
import CustomerList from './customer/CustomerList';
import CustomerInsert from './customer/CustomerInsert';
import CustomerUpdate from './customer/CustomerUpdate';

export default function BoardComponent() {
    return (
        <Container>
            <Row>
                <ul className='list-group list-group-horizontal'>
                    <li className='list-group-item'><NavLink to="/">Home</NavLink></li>
                    <li className='list-group-item'><NavLink to="/boardlist">게시판</NavLink></li>
                    <li className='list-group-item'><NavLink to="/boardInsert">게시글등록</NavLink></li>
                    <li className='list-group-item'><NavLink to="/customerList">회원관리</NavLink></li>
                </ul>
            </Row>
            <Routes>
                <Route path='/' element={"Welcome Board_CustomerComponect"}></Route>
                <Route path='/boardlist' element={<BoardList />}></Route>
                <Route path='/info/:seq' element={<BoardInfo />}></Route>
                <Route path='/boardInsert' element={<BoardInsert />}></Route>
                <Route path='/update/:seq' element={<BoardUpdate />}></Route>
                <Route path='/customerList' element={<CustomerList />}></Route>
                <Route path='/customerInsert' element={<CustomerInsert />}></Route>
                <Route path='/customerUpdate/:id' element={<CustomerUpdate />}></Route>
            </Routes>
        </Container>
    );
}