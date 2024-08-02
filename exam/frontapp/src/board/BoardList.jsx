import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function MakeTable({ boards, reCount }) {
    return (
        <>
            <Table border={1}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일자</th>
                    </tr>
                </thead>
                <tbody>
                    {boards.map((board, idx) => (
                        <tr key={board.no}>
                            <td>{board.no}</td>
                            <td><Link to={"" + board.no}>{board.title}</Link></td>
                            <td>{board.writer}</td>
                            <td>{board.created_date.substr(0, 10)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default function BoardList() {
    let [boards, setBoards] = useState([])
    let [reCount, setReCount] = useState([]);

    function CallAPI() {
        axios.get("/api/board")
            .then(result => setBoards(result.data))
        axios.get("/api/reply")
            .then(result => setReCount(result.data))
    }

    useEffect(() => {
        CallAPI();
    }, [])
    return (
        <>
            <MakeTable boards={boards} reCount={reCount} />
        </>
    );
};