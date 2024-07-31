import axios from "axios";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BoardInsert() {
    const navigate = useNavigate();
    const setFocus = useRef();
    let [form, setForm] = useState({ title: null, writer: null, content: null });

    async function handlerSave() {
        if (form.title == (null || "") || form.content == (null || "") || form.writer == (null || "")) {
            alert("제목, 작성자, 내용을 모두 입력해 주세요");
            console.log(form)
            return;
        }

        //ajax등록처리
        let url = "http://localhost/board/";
        let result = await axios.post(url, form);
        if (result.data.affectedRows == 1) {
            //목록으로 이동
            navigate("/list");
        } else {
            alert("등록할 데이터가 없거나 에러가 발생하였습니다 다시 한번시도해주세요.");
            setFocus.current.focus();
        }

    }

    function changeFormData(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">제목</label>
                    <input id="title" name="title" type="text" placeholder="React는 재밌는데.." value={form.title} onChange={changeFormData} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="writer" className="form-label">작성자</label>
                    <input id="writer" name="writer" type="text" placeholder="홍길동" value={form.writer} onChange={changeFormData} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">내용</label>
                    <textarea id="content" name="content" value={form.content} onChange={changeFormData} className="form-control" ref={setFocus}></textarea>
                </div>
                <div className="mb-3">
                    <Button type="button" onClick={handlerSave} variant="primary">등록</Button>
                </div>
            </form>
        </>
    );
}