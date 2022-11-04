import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Container>

      i <Outlet/>

    </Container>
  );
};

export default AuthLayout;
