import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <header className="navbar">
            <div className="navbar__brand">Assignment Manager</div>
            <nav className="navbar__links">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/allAssignments"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Assignments
                </NavLink>
                <NavLink
                    to="/AddAssignment"
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    Add Assignment
                </NavLink>
                {token ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </nav>
        </header>
    );
}
