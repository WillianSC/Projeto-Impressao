import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Layout from "@/components/Layout";
import PrivateRoute from "@/routes/PrivateRoute";
import Perfil from "@/pages/Perfil/Perfil";
import ImpressaoEnviar from "./pages/ImpressaoEnviar";
import HistoricoImpressao from "./pages/HistoricoImpressao";



function App() {
  return (
    <Routes>
      {/* Login fora do layout, rota pública */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas com layout */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
        
        <Route
          path="enviarImpressao"
          element={
            <PrivateRoute>
              <ImpressaoEnviar />
            </PrivateRoute>
          }
        />

        <Route
          path="historicoImpressao"
          element={
            <PrivateRoute>
              <HistoricoImpressao />
            </PrivateRoute>
          }
        />

      </Route>
    </Routes>
  );
}

export default App;
