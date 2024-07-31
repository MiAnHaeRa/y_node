import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function CustomerUpdate() {
   const { id } = useParams();
   const navigate = useNavigate();
   let [form, setForm] = useState({});

   let url = "http://localhost/customer/";
   function getCustomer() {
      axios.get(url + id)
         .then(result => {
            setForm(result.data[0]);
         })
   }

   useEffect(() => {
      getCustomer();
   }, [])

   function changeFormData(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
   }

   function handlerUpdate() {
      axios.put(url + id, form)
         .then(result => {
            if (result.data.affectedRows == 1) {
               alert("업데이트에 성공하였습니다.")
               navigate("/customerList")
            }
         })
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
               <input id="address" name="address" type="text" placeholder="대구광역시 중구" value={form.address} onChange={changeFormData} className="form-control"></input>
            </div>
            <div className="mb-3">
               <Button type="button" onClick={handlerUpdate} variant="primary">수정</Button>
            </div>
         </form>
      </>
   );
}