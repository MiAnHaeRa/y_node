import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function CustomerRow({customers}) {
   return(
      <>
            {customers.map(customer => {
                return (
                    <tr key={customer.id}>
                        <td>{customer.id}</td>
                        <td><Link to={"/CustomerUpdate/" + customer.id}>{customer.name}</Link></td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.address}</td>
                    </tr>
                );
            })}
        </>
   );
}

export default function CustomerList() {
   let [customers, setCustomers] = useState([]);

   let url = "http://localhost/customer/"
   function getCustomers() {
      axios.get(url)
      .then(result => setCustomers(result.data))
   }

   useEffect(() => {
      getCustomers();
   }, [])

   return (
      <>
         <Row>
                <Table>
                    <thead>
                        <tr>
                            <td colSpan="5">
                                <Link to="/customerInsert"><Button type="button" variant="primary">회원추가</Button></Link>
                            </td>
                        </tr>
                        <tr>
                            <th>회원번호</th>
                            <th>이름</th>
                            <th>이메일</th>
                            <th>휴대폰</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CustomerRow customers={customers} />
                    </tbody>
                </Table>
            </Row>
      </>
   );
}