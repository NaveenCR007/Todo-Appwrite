import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn'

function Header() {
    const authStatus = useSelector(state => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            path: '/',
            active: true
        },

        {
            name: "Add Task",
            path: '/',
            active: authStatus
        },

        {
            name: "Signup",
            path: '/signup',
            active: true
        },

        {
            name: "Login",
            path: '/login',
            active: !authStatus
        }
    ]

    return (
        <div className='w-full'>
            <nav>
                <ul className='flex ml-auto'>
                    {navItems.map((idx, item) =>
                        item.active ? (
                            <li key={idx}>
                                <button onClick={navigate(item.path)}>
                                    {item.name}
                                </button>
                            </li>
                        ) : null
                    )}

                    {authStatus && <LogoutBtn />}
                </ul>
            </nav>
        </div>
    )
}

export default Header
