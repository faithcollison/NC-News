import { useContext, useEffect, useState } from "react"
import { UserContext } from "./contexts/UserContext"
import { getUsers } from "../api"

const Users = () => {
    const [users, setUsers] = useState([])
    const {setUser} = useContext(UserContext)

    useEffect(()=> {
        getUsers()
        .then((users) => {
            setUsers(users)
        })
    }, [])

    const handleUserChange = (username) => {
        setUser(username)
    }
    
    
    return(
        <div >
            <h3 className="user-title"> Click your user avatar! </h3>
            <ul  className="user-list">
                {users.map((user) => {
                    return(
                        <li className="user-icon" key={user.username}>
                            <img className="avatar-photo"
                            src={user.avatar_url}
                            onClick={() => {
                                handleUserChange(user.username)
                            }}/>
                        <p> {user.username} </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users;
