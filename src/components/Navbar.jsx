import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        {" "}
        <Link to="/" id="nav-link">
          StackTracker
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
