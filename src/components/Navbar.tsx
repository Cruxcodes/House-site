import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  return (
    <footer className="navbar">
      <nav className="navbar__nav">
        <ul className="navbar__nav-list">
          <li className="navItem" onClick={() => navigate("/explore")}>
            <ExploreIcon fill="#2c2c2c" width="36px" height="36px" />
            <p className="navItem__paragraph">Explore</p>
          </li>
          <li className="navItem" onClick={() => navigate("/offers")}>
            <OfferIcon fill="#2c2c2c" width="36px" height="36px" />
            <p className="navItem__paragraph">Offers</p>
          </li>
          <li className="navItem " onClick={() => navigate("/profile")}>
            <PersonOutlineIcon fill="#2c2c2c" width="36px" height="36px" />
            <p className="navItem__paragraph">Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
