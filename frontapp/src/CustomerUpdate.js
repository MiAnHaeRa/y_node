import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';

function TopButton({ addClass, value }) {
    return (
        <>
            <Button type='button' variant={addClass}>{value}</Button>
        </>
    );
}

function InfoRow({ label, inname, ex, value }) {
    return (
        <tr>
            <th>{label}</th><td><input type='text' id={inname} name={inname} placeholder={ex} value={value} /></td>
        </tr>
    );
};

export default function CustomerUpdate({ needId }) {
    let [customer, setCustomer] = useState({});

    function getCustomer() {
        if (!needId) {
            return;
        }
        let url = "http://localhost/customer/" + needId;
        axios.get(url)
            .then(data => setCustomer(data.data[0]))
    };

    useEffect(() => {
        getCustomer();
    }, [needId])



    return (
        <Col lg={4} mg={12}>
            <div>
                <TopButton addClass="primary" value="추가" />
                <TopButton addClass="danger" value="삭제" />
                <TopButton addClass="secondary" value="리셋" />
            </div>
            <table className="table">
                <thead>
                    <tr colSpan="2">
                        <td><input type='hidden' id='id' value={customer.id} readOnly /></td>
                    </tr>
                </thead>
                <tbody>
                    <InfoRow label="이름" inname="name" ex="홍길동" value={customer.name} />
                    <InfoRow label="이메일" inname="email" ex="abc@example.com" value={customer.email} />
                    <InfoRow label="휴대폰" inname="phone" ex="010-1111-2222" value={customer.phone} />
                    <InfoRow label="주소" inname="address" ex="대구광역시 중구" value={customer.address} />
                </tbody>
            </table>
        </Col>
    );
};