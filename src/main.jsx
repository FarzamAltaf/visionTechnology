import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { StackProvider } from './contexts/stackContext.jsx'

createRoot(document.getElementById('root')).render(
  <StackProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </StackProvider>
)
