import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
