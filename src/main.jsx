import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import AddTask from './components/AddTask.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      {/* Only users can add tasks */}
      <AuthLayout authentication>
        <Route path='/add' element={<AddTask />} />
      </AuthLayout>

      <AuthLayout authentication={false}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </AuthLayout>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>,
)
