import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BoardInsert() {
    let [form, setForm] = useState({});
    const navigate = useNavigate();

    let today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0")
    const date = String(today.getDate()).padStart(2, "0")

    const formatTime = `${today.getFullYear()}-${month}-${date}`

    function handlerSubmit() {
        axios.post("/api/board", form)
            .then(result => {
                if (result.data.affectedRows == 1) {
                    alert("등록이 완료되었습니다.")
                    navigate("/boardList")
                }
            })
    }

    function handlerChange(e) {
        setForm({ ...form, [e.target.id]: e.target.value });
    }

    return (

        <Form onSubmit={handlerSubmit}>
            <Form.Group className="mb-3" controlId="no">
                <Form.Label>No.</Form.Label>
                <Form.Control type="text" placeholder="숫자만 입력" onChange={handlerChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
                <Form.Label>제목</Form.Label>
                <Form.Control type="text" onChange={handlerChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="writer">
                <Form.Label>작성자</Form.Label>
                <Form.Control type="text" onChange={handlerChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
                <Form.Label>내용</Form.Label>
                <Form.Control as="textarea" rows={10} onChange={handlerChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="created_date">
                <Form.Label>작성일자</Form.Label>
                <Form.Control type="text" readOnly value={formatTime} />
            </Form.Group>
            <Button variant="success" type="submit">
                저장
            </Button>
        </Form>

    );
}