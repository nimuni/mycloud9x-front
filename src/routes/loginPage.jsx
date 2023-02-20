import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from 'components/login';

const LoginPage = (props) => {
	return (
    <Container>
      <Row>
        <Col></Col>  
        <Col>
          <Login></Login>
        </Col>  
        <Col></Col>  
      </Row>
    </Container>
	);
};

export default LoginPage;