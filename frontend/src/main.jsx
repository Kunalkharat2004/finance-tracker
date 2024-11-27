import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {disableReactDevTools} from "@fvilers/disable-react-devtools"

if (import.meta.env.NODE_ENV === 'production') {disableReactDevTools()}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
