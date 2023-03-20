import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Membership from 'components/membership';

const MembershipPage = (props) => {
	return (
    <Container>
      <Row>
        <Col></Col>  
        <Col>
          <Membership></Membership>
        </Col>  
        <Col></Col>  
      </Row>
    </Container>
	);
};

export default MembershipPage;