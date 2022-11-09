import { auth } from "../utils/firebase"

function Dashboard() {
    return (
        <div>
            <h1>Your posts</h1>
            <div>posts</div>
            <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}

export default Dashboard