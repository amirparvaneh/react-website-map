import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Book Explorer</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
      </div>
    </nav>
  );
};

export default Navbar;
