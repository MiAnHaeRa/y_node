//state, ref, event => form field
import { useState, useRef } from 'react';

export default function Comp08_Form_Ref() {
    // let [msg, setMsg] = useState('씨익콩');
    // let [email, setEmail] = useState('씨익콩@gmail.com');
    let [form, setForm] = useState({ msg: "씨익콩", email: "씨익콩@gmail.com" });
    let inputMsg = useRef();        //document.getElementbyId("??");

    function handlerChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <form>
                <p>Msg : {form.msg}</p>
                <p>Email : {form.email}</p>
                <input name='msg' value={form.msg} onChange={handlerChange} ref={inputMsg} />
                <input name='email' value={form.email} onChange={handlerChange} />
                <button type='button' onClick={() => {
                    setForm({ msg: "", email: "" });
                    inputMsg.current.focus();
                }}>확인</button>
            </form>
        </>
    );
}