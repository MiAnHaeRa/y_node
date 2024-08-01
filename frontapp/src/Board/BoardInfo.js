import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Row, Table } from 'react-bootstrap';

export default function BoardInfo() {
    let { seq } = useParams();
    let [board, setBoard] = useState({});
    let navigate = useNavigate();

    let url = "http://localhost/board/";
    function getBoard() {
        axios.get(url + seq)
            .then(result => setBoard(result.data[0]))
    }

    async function handleDelete(e) {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            await axios.delete(url + seq);
            navigate("/bc_Component/boardlist");
        }
    }

    useEffect(() => {
        getBoard();
    }, [])

    return (
        <Row>
            <Table border={1}>
                <thead>
                    <tr>
                        <th>제목</th><td colSpan={3}>{board.title}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>작성일</th><td>{board.wet}</td>
                        <th>작성자</th><td>{board.writer}</td>
                    </tr>
                    <tr height="200">
                        <th>내용</th><td colSpan={3}>{board.content}</td>
                    </tr>
                </tbody>
                <Link to={"/bc_Component/update/" + board.seq}><Button variant='success'>수정</Button></Link>
                <Button type='button' variant='danger' onClick={handleDelete}>삭제</Button>
            </Table>
        </Row>
    );
}