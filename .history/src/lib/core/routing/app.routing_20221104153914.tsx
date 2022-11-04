import { Route, Routes } from "react-router-dom";

const AppRouting = () => {
  return <Routes>
    {/* Auth Routes */}
    {/* Main Routes */}
    {/* Not found */}
    <Route path="*" element={<h1>You have hit the end of the road</h1>}/>
  </Routes>;
};
export default AppRouting;
