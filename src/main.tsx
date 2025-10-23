import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ShopApp } from './ShopApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopApp />
  </StrictMode>,
)
