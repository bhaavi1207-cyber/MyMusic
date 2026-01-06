import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#222", color: "white" }}>
      <h2>MyMusic 🎵</h2>

      <nav>
        <Link to="/" style={{ color: "white", marginRight: "10px" }}>
          Home
        </Link>

        <Link to="/favorites" style={{ color: "white" }}>
          Favorites
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
