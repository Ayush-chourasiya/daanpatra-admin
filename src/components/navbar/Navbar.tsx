import "./Navbar.css";
import avatar from "../../assets/images/avatar.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_icon">
        <i className="fa fa-bars"> </i>
      </div>
      <div className="navbar_left">
        <a className="active_link" href="#">
          Admin Dashboard
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          {/* <i className="fa fa-search"></i> */}
        </a>
        <a href="#">
          
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
