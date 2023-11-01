import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    }).then((response) => response.json().then((userInfo) => {}));
  }, []);
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
