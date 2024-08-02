import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardUpdate() {
    let { no } = useParams();
    let [data, setData] = useState({});
    const navigate = useNavigate();

    function CallAPI() {
        axios.get("/api/board/" + no)
            .then(result => setData(result.data[0]))
    }

    useEffect(() => {
        CallAPI();
    }, []);

    function handlerSubmit() {
        axios.put("/api/board/" + no, data)
            .then(result => {
                if (result.data.affectedRows == 1) {
                    alert("수정이 완료되었습니다.")
                    navigate("/boardInfo/" + no)
                }
            })
    }

    function handlerChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    }
    return (
        <>
            <Form onSubmit={handlerSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>No.</Form.Label>
                    <Form.Control type="text" value={data.no} readOnly placeholder="숫자만 입력" onChange={handlerChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" value={data.title} onChange={handlerChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="writer">
                    <Form.Label>작성자</Form.Label>
                    <Form.Control type="text" value={data.writer} onChange={handlerChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="content">
                    <Form.Label>내용</Form.Label>
                    <Form.Control as="textarea" value={data.content} rows={10} onChange={handlerChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>작성일자</Form.Label>
                    <Form.Control type="text" readOnly value={data.created_date} />
                </Form.Group>
                <Button variant="success" type="submit">
                    수정
                </Button>
            </Form>
        </>
    );
}