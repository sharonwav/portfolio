import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './route/Router.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
