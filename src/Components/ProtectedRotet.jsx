import { Navigate } from "react-router-dom"
import { useGlobalContext } from "../Hooks/useGlobalContext"

export default function ProtectedRotet({ children, redirectIfLoggedIn }) {
    const { user } = useGlobalContext()

    if (redirectIfLoggedIn && user) {
        return <Navigate to="/" />
    }

    if (!redirectIfLoggedIn && !user) {
        return <Navigate to="/login" />
    }

    return children
}
