import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContextprovider from './context/UserContextprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <UserContextprovider>
      <App />
     </UserContextprovider>
  </StrictMode>,
)
