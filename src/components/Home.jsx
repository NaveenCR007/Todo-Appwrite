import { useSelector } from "react-redux"

function Home() {
    const authStatus = useSelector(state => state.auth.status)

    return !authStatus ? (
        <div className="text-center font-bold text-3xl min-h-80">Please login to add tasks</div>
    ) : <div className="text-center font-bold text-3xl min-h-80">Welcome to TodoWorld</div>
}

export default Home
