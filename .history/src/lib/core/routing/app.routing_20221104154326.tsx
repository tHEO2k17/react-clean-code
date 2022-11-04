import { Route, Routes } from "react-router-dom";
import AuthLayout from "../../presentation/layouts/auth.layout";

const AppRouting = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="auth" element={<AuthLayout />}></Route>

      {/* Main Routes */}

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
