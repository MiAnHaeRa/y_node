import axios from "axios";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CustomerInsert() {
   const navigate = useNavigate();
   const setFocus = useRef();
   let [form, setForm] = useState({
      name : "",
      email : "",
      phone : "",
      address : ""
   })

   async function handlerSave() {
      if (form.name == (null || "") || form.email == (null || "") || form.phone == (null || "") || form.address == (null || "")) {
          alert("이름, 이메일, 휴대폰, 주소를 모두 입력해 주세요");
          console.log(form);
          return;
      }

      //ajax등록처리
      let url = "http://localhost/customer/";
      let result = await axios.post(url, form);
      if (result.data.affectedRows == 1) {
          //목록으로 이동
          navigate("/customerList");
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
                  <label htmlFor="name" className="form-label">이름</label>
                  <input id="name" name="name" type="text" placeholder="홍길동" value={form.name} onChange={changeFormData} className="form-control" />
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">이메일</label>
                  <input id="email" name="email" type="email" placeholder="abc@gmail.com" value={form.email} onChange={changeFormData} className="form-control" />
              </div>
              <div className="mb-3">
                  <label htmlFor="phone" className="form-label">휴대폰</label>
                  <input id="phone" name="phone" type="text" placeholder="010-1111-1111" value={form.phone} onChange={changeFormData} className="form-control"></input>
              </div>
              <div className="mb-3">
                  <label htmlFor="address" className="form-label">주소</label>
                  <input id="address" name="address" type="text" placeholder="대구광역시 중구" value={form.address} onChange={changeFormData} className="form-control" ref={setFocus}></input>
              </div>
              <div className="mb-3">
                  <Button type="button" onClick={handlerSave} variant="primary">등록</Button>
              </div>
          </form>
      </>
  );
}