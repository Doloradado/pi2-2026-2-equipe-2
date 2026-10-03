import { Navigate, Route, Routes } from "react-router-dom"
import AtendimentoDetalhe from "./pages/AtendimentoDetalhe"
import Layout from "./layouts/Layout"

function Login() {
  return <h1>Login</h1>
}

function Dashboard() {
  return <h1>Dashboard</h1>
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
        <Route path="/atendimento/:id" element={<AtendimentoDetalhe />} />
      </Route>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App