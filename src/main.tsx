import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { NuqsAdapter } from 'nuqs/adapters/react-router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <RouterProvider router={router} />
    </NuqsAdapter>
  </StrictMode>,
)
