import { Link } from "react-router-dom";

const Nav = () => {
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
        </nav>
    )
}
export default Nav;