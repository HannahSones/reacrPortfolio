import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
