import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispath = useDispatch()

    const handleLogout = () => {
        authSli
    }

    return (
        <div>
            <button onClick={handleLogout}>

            </button>
        </div>
    )
}

export default LogoutBtn
