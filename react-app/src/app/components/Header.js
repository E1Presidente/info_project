import Logo from "../img/logo192.png";
import Nav from "./Nav";

function Header() {
  return (
    <div className="Header">
      <img src={Logo} alt="Logo" className="Header-logo" />
      <Nav />
    </div>
  );
}

export default Header;