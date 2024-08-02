import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardInfo() {
    let { no } = useParams();
    let [data, setData] = useState({});
    const navigate = useNavigate();

    function CallAPI() {
        axios.get("/api/board/" + no)
            .then(result => setData(result.data[0]))
    }

    useEffect(() => {
        CallAPI();
    }, [])


    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>번호</th><td>{data.no}</td>
                    <th>작성일</th><td>{data.created_date}</td>
                    <th>이름</th><td>{data.writer}</td>
                </tr>
                <tr>
                    <th colSpan={2}>제목</th><td colSpan={4}>{data.title}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={6}>{data.content}</td>
                </tr>
            </tbody>
            <tfoot>
                <Button type="button" variant="primary" onClick={() => { navigate("/boardUpdate/" + no) }}>수정</Button>
            </tfoot>
        </Table>

    );
}