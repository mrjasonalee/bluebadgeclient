import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (
    <Container className="auth-container">AQ
            <Row>
                <Col md="6">
                {2} {3} {4}
                <Signup setToken={props.setToken}/>
                </Col>
                <Col md="6" className="login-col">
                                    {'username required'}
                    <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;