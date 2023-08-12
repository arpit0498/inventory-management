import { NavLink } from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
    const getActiveStyle = ({ isActive }) => ({
        fontWeight: isActive ? "800" : "100"
    });

    return (
        <nav>
            <NavLink className="link" to="/" style={getActiveStyle}>
                Dashboard
            </NavLink>
            <NavLink className="link" to="/departments" style={getActiveStyle}>
                Departments
            </NavLink>
            <NavLink className="link" to="/products" style={getActiveStyle}>
                Products
            </NavLink>
        </nav>
    );
};
