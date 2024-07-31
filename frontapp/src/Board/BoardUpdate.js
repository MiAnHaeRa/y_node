import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardUpdate() {
    let { seq } = useParams();
    let [board, setBoard] = useState({});
    let navigate = useNavigate();

    let url = "http://localhost/board/" + seq;

    function getBoard() {
        axios.get(url)
            .then(result => {
                setBoard(result.data[0]);
                delete board.wet;
                console.log(board);
            })
    }

    useEffect(() => {
        getBoard();
    }, [])

    function changeFormData(e) {
        setBoard({ ...board, [e.target.name]: e.target.value })
    }

    function handlerUpdate() {
        axios.put(url, board)
            .then(result => {
                if (result.data.affectedRows == 1) {
                    alert("업데이트에 성공하였습니다.")
                    navigate("/info/" + seq)
                }
            })
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">제목</label>
                    <input id="title" name="title" type="text" placeholder="React는 재밌는데.." value={board.title} onChange={changeFormData} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="writer" className="form-label">작성자</label>
                    <input id="writer" name="writer" type="text" placeholder="홍길동" value={board.writer} onChange={changeFormData} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">내용</label>
                    <textarea id="content" name="content" value={board.content} onChange={changeFormData} className="form-control"></textarea>
                </div>
                <div className="mb-3">
                    <Button type="button" onClick={handlerUpdate} variant="primary">등록</Button>
                </div>
            </form>
        </>
    );
}