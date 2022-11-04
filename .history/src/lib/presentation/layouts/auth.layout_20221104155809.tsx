import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Outlet/>
        </Col>
        <Col className="bg-primary">
        
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
