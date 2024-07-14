import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Acceso from "./vistas/acceso/acceso.jsx"
import Inicio from "./vistas/inicio/inicio.jsx"
import Dispositivos from "./vistas/dispositivos/dispositivos.jsx"
import Perfil from "./vistas/perfil/perfil.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
      <>
          <Route path="/" element={<Acceso />} />
          <Route path="/inicio" element={<Inicio />}/>
          <Route path="/dispositivos" element={<Dispositivos />} />
          <Route path="/perfil" element={<Perfil />} />
      </>

  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
