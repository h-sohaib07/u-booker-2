import React from 'react';
import { Navbar, Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../index.css'

class Login extends React.Component {

    render() {
        return (
            <div className="container-fluid h-100">
                <Row className="h-100">
                    <Col className="d-none d-md-block d-lg-block" md={4} id="yellow"> XXXX</Col>
                    <Col xs={12} md={8} >
                        <Container className="cont-sign-in">
                                    <Form>
                                        <p className="h5 text-center mb-4" style={{backgroundColor:"1ps solid #f75011"}}>Sign In</p>
                                        <div className="grey-text">
                                            <Form.Control className="inp-bdr mb-3"  name="Username" placeholder="Username" />
                                            <Form.Control type="password" className="inp-bdr mb-3"  name="Password" placeholder="Password" />
                                        </div>
                                        <Form.Check
                                        custom
                                        type='checkbox'
                                        className="fanc-check"
                                        label={`Remember me`}
                                    />
                                    </Form>
                        </Container>

                    </Col>
                </Row>
            </div>
        );
    };
}

export default Login;