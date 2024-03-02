import { useNavigate } from "react-router-dom";
import Button from "../../buttons/button";
import { useAuth } from "../../../../Contexts/AuthContext";
import Profiledropdown from "./profiledropdown";
import { useEffect, useState } from "react";
import Mobilemenu from "./mobilemenu";

const NavContent = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [profile, setIsprofile] = useState(false);
  const [scroll, setScroll] = useState(false);

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
          className="bitBhoomiLogo"
          src="/logo_white.png"
          alt="BitBhoomi"
          style={{ height: "4rem",cursor:"pointer" }}
          onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page
          navigate("/"); // Redirects to the home page
          }}
        />
        <div className="navlinkscontainer">
          {Object.keys(navlinks).map((link, index) => (
            <div
              key={"nav-link-" + index}
              className="navlink"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate(navlinks[link])}}
            >
              {link}
            </div>
          ))}
        </div>
        <div className="logincontainer">
          <Button
            variant={"secondary"}
            title="Contact Us"
            onClick={() => navigate("/contact")}
          />

          {auth.isLoggedIn ? (
            <div
              className="profilepiccontainer"
              onMouseEnter={() => setIsprofile(true)}
              onMouseLeave={() => setIsprofile(false)}
            >
              <img src={auth.avatar} alt="Avatar" />
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
