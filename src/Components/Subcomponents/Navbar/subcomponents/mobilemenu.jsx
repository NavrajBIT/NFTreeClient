import { useState } from "react";
import menuicon from "./menu.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";

const Mobilemenu = () => {
  const [ismenu, setIsmenu] = useState(false);
  return (
    <div className="mobilemenucontainer">
      <img src={menuicon} alt="menu" onClick={() => setIsmenu(true)} />
      {ismenu && <MenuOptions setIsmenu={setIsmenu} />}
    </div>
  );
};

export default Mobilemenu;

const MenuOptions = ({ setIsmenu }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const navlinks = {
    Home: "/",
    Projects: "/projects",
    Wallet: "/wallet",
    "Contact Us": "/contact",
  };
  return (
    <div className="menusidebarcontainer">
      <div className="menusidebarfilter" onClick={() => setIsmenu(false)} />
      <div className="menusidebar">
        <div
          style={{
            fontSize: "2rem",
            color: "var(--text-bright)",
            textAlign: "right",
            cursor: "context-menu",
            padding: "var(--padding-main)",
          }}
          onClick={() => setIsmenu(false)}
        >
          X
        </div>
        {Object.keys(navlinks).map((link, index) => (
          <div
            key={"sidebar-link" + index}
            className="sidebarlink"
            onClick={() => {
              setIsmenu(false);
              navigate(navlinks[link]);
            }}
          >
            {link}
          </div>
        ))}
        {auth.isLoggedIn ? (
          <div>
            <div
              className="profilepiccontainer"
              style={{ width: "100%", padding: "var(--padding-main)" }}
            >
              <img src={auth.avatar} alt="Profile" />
            </div>
            <div
              className="sidebarlink"
              onClick={() => {
                setIsmenu(false);
                navigate("/profile");
              }}
            >
              Profile
            </div>
            <div
              className="sidebarlink"
              onClick={() => {
                setIsmenu(false);
                auth.logout();
              }}
            >
              Logout
            </div>
          </div>
        ) : (
          <div
            className="sidebarlink"
            onClick={() => {
              setIsmenu(false);
              navigate("/login");
            }}
          >
            Log In
          </div>
        )}
      </div>
    </div>
  );
};
