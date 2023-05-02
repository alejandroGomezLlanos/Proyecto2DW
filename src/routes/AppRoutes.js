import { Link, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateAcount from "../pages/CreateAcount";
import Perfil from "../pages/Perfil";

export const AppRoutes = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            Login
          </li>
          <li class="breadcrumb-item">
            <a href="Home">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="CreateAcount">CreateAcount</a>
          </li>
          <li class="breadcrumb-item">
            <a href="Perfil">Perfil</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CreateAcount" element={<CreateAcount />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/*" element={<Navigate to="/Login" />} />
      </Routes>
    </>
  );
};
