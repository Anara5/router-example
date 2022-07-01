import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="Nav">
                <ul>
                    <li><NavLink to="/">Main</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;