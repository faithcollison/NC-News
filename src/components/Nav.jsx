import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "./contexts/UserContext";

export const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="nav-bar">
      <Link to="/" className="link">
        <h2> Home </h2>
      </Link>
      <Link className="link" to="/articles">
        <h2> Articles </h2>
      </Link>
      <Link className="link" to="/users">
        <h2> Users </h2>
      </Link>
      <div className="logged-in">
        <p> Active User: </p>
        <p> {user} </p>
      </div>
    </nav>
  );
};


