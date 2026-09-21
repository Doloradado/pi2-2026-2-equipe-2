import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Desktop - 1"
import Painel from "./pages/Desktop - 2"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/painel" element={<Painel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App