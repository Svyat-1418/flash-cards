import { RouterProvider } from 'react-router-dom'

import { router } from './router/publ/router'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
