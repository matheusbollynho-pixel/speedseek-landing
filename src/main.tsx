import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TermosPage from './TermosPage.tsx'
import PrivacidadePage from './PrivacidadePage.tsx'

const path = window.location.pathname

let Page = App
if (path === '/termos') Page = TermosPage
else if (path === '/privacidade') Page = PrivacidadePage

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
