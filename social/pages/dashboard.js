import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Dashboard() {
    const route = useRouter();
    const [user, loading] = useAuthState(auth);
    //See if user is logged
    const getData = async () => {
        if (loading) return;
        if (!user) return route.push('/auth/login');
    }

    //Get users data

    useEffect(() => {
        getData();
    }, [user, loading])


    return (
        <div>
            <h1>Your posts</h1>
            <div>posts</div>
            <button onClick={() => auth.signOut()}>Sign out</button>
        </div>
    )
}

export default Dashboard