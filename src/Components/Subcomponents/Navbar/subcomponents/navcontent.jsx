import { useNavigate } from "react-router-dom";
import Button from "../../buttons/button";
import { useAuth } from "../../../../Contexts/AuthContext";
import Profiledropdown from "./profiledropdown";
import { useEffect, useState, useRef } from "react";
import Mobilemenu from "./mobilemenu";
import "../Navbar.css";

const NavContent = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [profile, setIsprofile] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navlinks = {
    Home: "/",
    Projects: "/projects",
  };

  const handleScroll = () => {
    window.scrollY >= 2 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="navbarcontainer"
      style={{
        backgroundColor: scroll ? "var(--green-100)" : "transparent",
        backgroundImage: scroll
          ? "linear-gradient(170deg, #1B2F2F, #224629)"
          : "none",
        height: scroll ? "var(--nav-height-small)" : "var(--nav-height)",
      }}
    >
      <div className="navcontentcontainer">
        <img
          src="/logo_white.png"
          alt="BitBhoomi"
          style={{ height: "4rem", cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <div className="navlinkscontainer">
          {Object.keys(navlinks).map((link, index) => (
            <div
              key={"nav-link-" + index}
              className="navlink"
              onClick={() => navigate(navlinks[link])}
            >
              {link}
            </div>
          ))}
          <div
            className="navlink"
            onClick={() => window.open("https://bitbhoomiido.onrender.com/")}
          >
            IDO
          </div>
        </div>

        <div className="logincontainer">
          {auth.isLoggedIn ? (
            <div onMouseLeave={() => setIsDropdownOpen(false)}>
              <button
                className="walletButton"
                onMouseEnter={() => setIsDropdownOpen(true)}
              >
                Connect wallet
              </button>

              {isDropdownOpen && (
                <div className="dropdown">
                  <span>
                    <img src="/phantom.png" alt="phantom_logo" />
                    <button>Phantom</button>
                  </span>
                  <hr />
                  <span>
                    <img src="/solfare.png" alt="solfare_logo" />
                    <button>Solfare</button>
                  </span>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant={"secondary"}
              title="Contact Us"
              onClick={() => navigate("/contact")}
            />
          )}

          {auth.isLoggedIn ? (
            <div
              className="profilepiccontainer"
              onMouseEnter={() => setIsprofile(true)}
              onMouseLeave={() => setIsprofile(false)}
            >
              {auth.avatar ? (
                <img src={auth.avatar} alt="Avatar" />
              ) : (
                <img src="/user.png" alt="Default Avatar" />
              )}
              {profile && <Profiledropdown />}
            </div>
          ) : (
            <Button
              variant={"primary"}
              title="Login"
              onClick={() => navigate("/login")}
            />
          )}
        </div>
        <Mobilemenu />
      </div>
    </div>
  );
};

export default NavContent;
