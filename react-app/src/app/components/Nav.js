import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default Nav;