import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispath = useDispatch()

    const handleLogout = () => {
        authService.logout()
            .then(dispath(logout()))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <button
                onClick={handleLogout}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            >
                Logout
            </button>
        </div>
    )
}

export default LogoutBtn
