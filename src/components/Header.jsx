import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const Header = () => {
    const {user} = useContext(UserContext)
    return (
        <header className="header">
            <h1> NC News </h1>
            <p> {user} is logged in! </p>
        </header>
        )
}
export default Header;