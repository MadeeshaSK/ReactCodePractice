import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import App2 from './App2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* import components (// we can use components like this)*/}
    <App />  
    <App2 />
  </StrictMode>,
)
