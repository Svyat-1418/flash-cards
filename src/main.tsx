import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'

import { router } from './pages/router.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
