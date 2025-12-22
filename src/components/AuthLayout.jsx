import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({ children, authentication = true }) {
    const authStatus = useSelector(state => state.auth.status)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate('/')
        }

        setLoading(false)
    }, [authentication, navigate, authStatus])

    return (
        loading ? <h1>Loading...</h1> : <>{children}</>
    )
}

export default AuthLayout
