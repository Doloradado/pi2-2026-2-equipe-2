import { Navigate, Route, Routes } from "react-router-dom"

import Layout from "./layouts/Layout"
import Login from "./pages/Login"
import TesteComponentes from "./pages/TesteComponentes"
import Dashboard from "./pages/Dashboard"

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
        <Route path="/atendimento/:id" element={<Atendimento />} />
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