import { Route, Routes } from "react-router-dom";

const AppRouting = () => {
  return <Routes>
    {/* Auth Routes */}
    {/* Main Routes */}


    {/* Not found */}
    <Route path="*" element={<h1>404.</h1>}/>
  </Routes>;
};
export default AppRouting;
