import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const Nav = () => {
    const {user} = useContext(UserContext)
    return (
        <nav className="nav-bar">
            <Link to="/">
                <h2> Home </h2>
            </Link>
            <Link to="/articles">
                <h2> Articles </h2>
            </Link>
            <Link to="/users">
                <h2> Users </h2>
            </Link>
            <p> Logged in: {user}  </p>
        </nav>
    )
}
export default Nav;