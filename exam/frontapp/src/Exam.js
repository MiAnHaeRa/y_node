import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import BoardList from './board/BoardList';
import BoardInfo from './board/BoardInfo';
import BoardInsert from './board/BoardInsert';
import BoardUpdate from './board/BoardUpdate';

function Header() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand>게시판</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/boardList">전체조회</Nav.Link>
                    <Nav.Link href="/boardInsert">글 등록</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

function Section() {
    return (

        <Row>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/boardList' element={<BoardList />}></Route>
                <Route path='/boardList/:no' element={<BoardInfo />}></Route>
                <Route path='/boardInsert' element={<BoardInsert />}></Route>
                <Route path='/boardUpdate/:no' element={<BoardUpdate />}></Route>
            </Routes>
        </Row>

    );
}

function Footer() {
    return (
        <>
            <div>2023 Company, Inc</div>
        </>
    );
}

function Home() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p>커뮤니티 게시판입니다.</p>
                        <p>* 본 게시판은 따뜻한 소통과 자유롭게 정보 공유를 위해 운영되는 페이지입니다.</p>
                        <p>* 욕설, 비방, 광고 등 타인에게 불쾌감을 줄 수 있는 내용은 삼가주시기 바랍니다.</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default function Exam() {
    return (
        <Container>
            <Row>
                <Header />
                <hr></hr>
                <Section />
                <hr></hr>
                <Footer />
            </Row>
        </Container>
    );
};