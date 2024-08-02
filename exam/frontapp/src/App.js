import { Routes, Route } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Book from './book/BookComponent';
import BookList from './book/BookList';
import BookInfo from './book/BookInfo';

function CustomNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">책방</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="bookList">책리스트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

function App() {
  return (
    <Container>
      <CustomNav />
      <Routes>
        <Route path='/' element={<Book />}></Route>
        <Route path='bookList/' element={<BookList />}></Route>
        <Route path='bookList/:no' element={<BookInfo />}></Route>
      </Routes>
    </Container>
  );
};

export default App;