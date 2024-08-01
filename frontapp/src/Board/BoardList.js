import axios from "axios";
import { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

function BoardRow({ boards }) {
    return (
        <>
            {boards.map(board => {
                return (
                    <tr key={board.seq}>
                        <td>{board.seq}</td>
                        <td><NavLink to={"/bc_Component/info/" + board.seq}>{board.title}</NavLink></td>
                        <td>{board.wet}</td>
                        <td>{board.writer}</td>
                    </tr>
                );
            })}
        </>
    );
}

export default function BoardList() {
    let [boards, setBoards] = useState([]);
    let [lastPage, setLastPage] = useState(1);

    let location = useLocation();
    const search = new URLSearchParams(location.search);
    const p_page = search.get("page");
    const page = !p_page ? 1 : p_page;

    let url = "http://localhost/board?page=" + page;
    function getBoards() {
        axios.get(url)
            .then(result => {
                setBoards(result.data.list);
                setLastPage(Math.ceil(result.data.total / 10));
            })
    }

    useEffect(() => {
        getBoards();
    }, [page])

    return (
        <>
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <td colSpan="4">
                                <NavLink to="/bc_Component/boardInsert"><Button type="button" variant="primary">글쓰기</Button></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BoardRow boards={boards} />
                    </tbody>
                </Table>
            </Row>
            {[...Array(lastPage)].map((p, idx) => (<Link to={"/bc_Component/boardlist?page=" + (idx + 1)}><Button type="button">{idx + 1}</Button> </Link>))}
        </>
    )
}