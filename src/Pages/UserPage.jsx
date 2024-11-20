//useParams
import { useParams } from 'react-router-dom'

function UserPage() {

    const { id } = useParams()

    return (
        <div>
            <h1>User Page</h1>
            <p>Foydalanuvchi : {id}</p>
        </div>
    )
}

export default UserPage
