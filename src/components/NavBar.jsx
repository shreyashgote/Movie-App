import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/Movie-App/">MovieApp</Link>
      </div>
      <div className="navbar-links">
        <Link to="/Movie-App/" className="nav-link">
          Home
        </Link>
        <Link to="/Movie-App/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
