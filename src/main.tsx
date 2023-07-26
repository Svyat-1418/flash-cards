import { createRoot } from 'react-dom/client'

import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import './styles/index.scss'

// eslint-disable-next-line import/order
import { StrictMode } from 'react'

import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { store } from './app/store.ts'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <App />
    </Provider>
  </StrictMode>
)
