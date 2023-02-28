import "./Header.scss";
import logo from "../../assets/images/logo.png";
function Header() {
  return (
    <header className="header">
      <div>
        <img className="header-logo" src={logo} alt="logo Architoi" />
      </div>
    </header>
  );
}

export default Header;
