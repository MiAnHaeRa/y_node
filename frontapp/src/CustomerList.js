import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

function CustomerRow({ customers, onClick }) {
    function rowClick(e) {
        onClick(e.target.id);
    }

    return (
        <>
            {customers.map(customer => (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td id={customer.id} onClick={rowClick}>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.address}</td>
                </tr>
            ))}
        </>
    );
}

export default function CustomerList({ onClick }) {
    let [customers, setCustomers] = useState([]);

    function getCustomers() {
        axios.get("http://localhost/customer/")
            .then(result => setCustomers(result.data))
    };

    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <Col lg={8} md={12}>
            <table className='table'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>휴대폰</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    <CustomerRow customers={customers} onClick={onClick} />
                </tbody>
            </table>
        </Col>
    );
};