import { Link, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateAcount from "../pages/CreateAcount";

export const AppRoutes = () => {
  return (
    <>
      <h1> hola </h1>
      <Link to="/">Home</Link>
      <Link to="/Home">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/CreateAcount">CreateAcount</Link>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CreateAcount" element={<CreateAcount />} />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
