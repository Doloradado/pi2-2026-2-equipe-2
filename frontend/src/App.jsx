import { Navigate, Route, Routes } from "react-router-dom"

import Layout from "./layouts/Layout"
import Dashboard from "./pages/Dashboard"
import DashboardMock from "./pages/Dashboard-mock"
import DashboardMockC from "./pages/DashboardMockC"

function Login() {
  return <h1>Login</h1>
}

function Atendimento() {
  return <h1>Atendimento</h1>
}

function NotFound() {
  return <h1>Página não encontrada</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/atendimento/:id" element={<Atendimento />} />
        <Route path="/dashboardmock" element={<DashboardMock />} />
        <Route path="/dashboardmockc" element={<DashboardMockC />} />
      </Route>

      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App