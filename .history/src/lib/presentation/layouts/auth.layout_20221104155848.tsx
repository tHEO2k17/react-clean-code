import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Container className="min-vh-100" fluid>
      <Row className="min-vh-100 align-items-center">
        <Col>
          <Outlet/>
        </Col>
        <Col className="bg-primary">
        hgsafgfshgdfah
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
