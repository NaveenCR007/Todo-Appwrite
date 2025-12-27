import { useState, useEffect } from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })

      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen'>
      <div className='w-full bg-green-200'>
        <Header />
        {/* main is a symantic tag */}

        <main>
          {/* Here comes your components */}
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : null
}

export default App
