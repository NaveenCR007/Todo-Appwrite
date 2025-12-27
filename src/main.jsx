import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { Login, Signup, AddTask, AuthLayout, Home } from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      <Route path='/' element={<Home />} />

      {/* Protected routes */}
      <Route element={<AuthLayout authentication />}>
        <Route path="add" element={<AddTask />} />
      </Route>

      {/* Public routes */}
      <Route element={<AuthLayout authentication={false} />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>,
)
