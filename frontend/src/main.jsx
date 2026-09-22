import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TesteComponentes from './pages/TesteComponentes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TesteComponentes/>
  </StrictMode>,
)
