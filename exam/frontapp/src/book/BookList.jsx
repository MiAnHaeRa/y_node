import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function MakeTable({books}) {
    return(
        <>
            <Table border={1}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>책 제목</th>
                        <th>글쓴이</th>
                        <th>출판사</th>
                        <th>출간일</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.no}>
                            <td>{book.no}</td>
                            <td><Link to={"" + book.no}>{book.name}</Link></td>
                            <td>{book.writer}</td>
                            <td>{book.publisher}</td>
                            <td>{book.publication_date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default function BookList() {
    let [books, setBooks] = useState([])

    function CallAPI() {
        axios.get("/api/book")
            .then(result => setBooks(result.data))
    }

    useEffect(() => {
        CallAPI();
    }, [])
    return(
        <>
            <MakeTable books={books}/>
        </>
    );
}