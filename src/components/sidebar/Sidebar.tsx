import "./Sidebar.css";
import logo from "../../assets/images/logofinal.png";
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className={"sidebar-responsive"} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="sidebar__menu">

        <div className="sidebar__link">
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </div>

        <div className="sidebar__link">

          <Link to="/user-profile" style={{ textDecoration: "none" }}>
            User Profile
          </Link>
        </div>

        <div className="sidebar__link">

          <Link to="/ngo-profile" style={{ textDecoration: "none" }}>
            Ngo Profile
          </Link>
        </div>

        <div className="dropdown">
          <span className="drop-btn">Donation</span>
          <div className="dropdown-content">
            <Link to="Donationdetails" style={{ textDecoration: "none" }}>
              Donation details
              </Link>
            <Link to="/donationrecieved" style={{ textDecoration: "none" }}>
              Donation Recieved
            </Link>

          </div>
        </div>



        <div className="sidebar__link">
          <Link to="/invitation" style={{ textDecoration: "none" }}>
            Invitation Details
            </Link>
        </div>

        <div className="sidebar__link">
          <Link to="/topslidebar" style={{ textDecoration: "none" }}>
            Top sliders
                    </Link>

        </div>

        <div className="sidebar__link">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            FAQ Data
          </Link>
        </div>

        <div className="sidebar__link">

          <Link to="/aboutdata" style={{ textDecoration: "none" }}>
           WE Are
          </Link>
        </div>

        <div className="sidebar__link">
          <Link to="Volunteer" style={{ textDecoration: "none" }}>
              Volunteer
        </Link>
        </div>

        <div className="sidebar__link">
          <Link to="contactus" style={{ textDecoration: "none" }}>
            Contact Us
          </Link>
        </div>


        <div className="sidebar__logout">

          <Link to="/logout" style={{ textDecoration: "none" }}>
            Log out
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Sidebar;
