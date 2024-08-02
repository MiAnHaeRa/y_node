import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function BookInfo() {
    const navigate = useNavigate();
    const [book, setBook] = useState({})
    const { no } = useParams()

    function CallAPI() {
        axios.get("/api/book/" + no)
            .then(result => setBook(result.data[0]));
    };

    useEffect(() => {
        CallAPI();
    }, []);

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>제목</th><td>{book.name}</td>
                        <th>글쓴이</th><td>{book.writer}</td>
                    </tr>
                    <tr>
                        <th>출판사</th><td>{book.publisher}</td>
                        <th>출간일</th><td>{book.publication_date}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>줄거리</th><td colSpan={3}>{book.info}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <Button variant="primary" onClick={() => { navigate("/bookList") }}>목록으로</Button>
                    </tr>
                </tfoot>
            </Table>
        </>
    );
}