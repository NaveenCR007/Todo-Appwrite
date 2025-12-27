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
            path: '/add',
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
        <div className='w-full h-12 bg-sky-400'>
            <nav className='flex items-center justify-between'>
                <span className='font-bold text-3xl'>TodoWorld</span>

                <ul className='flex ml-auto'>
                    {navItems.map((item, idx) =>
                        item.active ? (
                            <li key={idx}
                                className='inline-block px-5 py-2 duration-200 hover:bg-blue-300 rounded-full cursor-pointer'>
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
