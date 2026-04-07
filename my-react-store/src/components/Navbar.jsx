// Imports
import { useContext } from "react";
import GlobalContext from "../state/globalContext";
import { Link } from "react-router-dom";
import { IconUserCircle } from "@tabler/icons-react";
import "./Navbar.css";

// Logic
function Navbar() {
  const user = useContext(GlobalContext).user;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="#">
          🌿 Organika
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/shop"}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin"}>
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light" to={"/profile"}>
                <IconUserCircle color="#2d6a4f" size={28} />
                <span className="ms-1">
                  {user.firstName} {user.lastName}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Export
export default Navbar;
