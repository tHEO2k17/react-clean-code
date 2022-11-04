import { Route, Routes } from "react-router-dom";
import AuthLayout from "../../presentation/layouts/auth.layout";
import MainLayout from "../../presentation/layouts/main.layout";
// import { AuthLayout, MainLayout } from "../../presentation/layouts/index";

const AppRouting = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="auth" element={<AuthLayout />}></Route>

      {/* Main Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route path="home" element={<h1> Obra</h1>  }/>
      </Route>

      {/* Not found */}
      <Route
        path="*"
        element={
          <h1 className="text-center text-muted">
            You have hit the end of the road!
          </h1>
        }
      />
    </Routes>
  );
};
export default AppRouting;
