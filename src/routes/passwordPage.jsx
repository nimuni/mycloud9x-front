import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Password from 'components/password';

const PasswordPage = (props) => {
	return (
    <Container>
      <Row>
        <Col></Col>  
        <Col>
          <Password></Password>
        </Col>  
        <Col></Col>  
      </Row>
    </Container>
	);
};

export default PasswordPage;