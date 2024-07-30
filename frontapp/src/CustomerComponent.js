import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomerList from './CustomerList';
import CustomerUpdate from './CustomerUpdate';

export default function CustomerComponent() {
    let [needId, setNeedId] = useState();

    return (
        <Container>
            <Row >
                <h2>Customer</h2>
                <CustomerList onClick={_id => { setNeedId(_id) }} />
                <CustomerUpdate needId={needId} />
            </Row>
        </Container>
    );
};