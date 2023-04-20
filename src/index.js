import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import CreateAcount from "./pages/CreateAcount";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
//import { Login } from "../pages/Login";
import { Home } from "./pages/Home";
import { CreateAcount } from "./pages/CreateAcount";
import { Navigate } from "react-router-dom";

//import Banner from "./componentes/Banner";
import { AppRoutes } from "./routes/AppRoutes";
import { Login } from "./pages/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/CreateAcount" element={<CreateAcount />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  </BrowserRouter>
);
//profe, intenté usar rutas de esta forma, pero
//salió un error que no supe corregir
//esta pagina la dejare en StrictMode, lo siento
//<BrowserRouter>
//<AppRoutes />
//</BrowserRouter>
//
//eso y no logré corregir el error de imagenes super puestas
