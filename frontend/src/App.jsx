import { Navigate, Route, Routes } from "react-router-dom"
import AtendimentoDetalhe from "./pages/AtendimentoDetalhe"
import Layout from "./layouts/Layout"

import Login from "./pages/Login"
import TesteComponentes from "./pages/TesteComponentes"
import Dashboard from "./pages/Dashboard"
import DashboardMock from "./pages/Dashboard-mock"
import DashboardMockC from "./pages/DashboardMockC"
import Perfil from "./pages/Perfil"


function NotFound() {
  return <h1>Página não encontrada</h1>
}

function App() {
  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/teste" element={<TesteComponentes />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/atendimento/:id" element={<AtendimentoDetalhe />} />
        <Route path="/dashboardmock" element={<DashboardMock />} />
        <Route path="/dashboardmockc" element={<DashboardMockC />} />
        <Route path="/perfil" element={<Perfil />} />
        
      </Route>

      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes >
  )
}

export default App