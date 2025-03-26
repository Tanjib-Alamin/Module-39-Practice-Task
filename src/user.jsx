import { use } from "react";

export default function Users({ fetchUsers }) {

    const users =use(fetchUsers)
    

    return (
        <div className="card">
            <p>Users:{users.length }</p>
        </div>
    )
}