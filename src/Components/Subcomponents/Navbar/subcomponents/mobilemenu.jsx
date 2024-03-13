import { useState } from "react";
import menuicon from "./menu.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import "../Navbar.css";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const auth = useAuth();
  const navlinks = {
    Home: "/",
    Projects: "/projects",
    Dashboard: "/dashboard",
    // "Contact Us": auth.isLoggedIn ? null : "/contact",
    // "Connect Wallet": auth.isLoggedIn ? "/connect-wallet" : null,
  };
  const handleDropdownOpen = () => {
    setIsDropdownOpen((prevState) => !prevState);
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
            <p> {link}</p>
          </div>
        ))}
        <div
          className="sidebarlink"
          onClick={() => {
            window.open("https://bitbhoomiido.onrender.com/");
          }}
        >
          IDO
        </div>
        {auth.isLoggedIn ? (
          <div>
            <div className="sidebarlink">
              <div>
                <button
                  className="walletButtonMobile"
                  onClick={handleDropdownOpen}
                >
                  Connect wallet
                </button>

                {isDropdownOpen && (
                  <div className="dropdown">
                    <span>
                      <img
                        src="/phantom.png"
                        className="phantom"
                        alt="phantom_logo"
                      />
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
            </div>
            <div
              className="profilepiccontainer"
              style={{ width: "100%", padding: "var(--padding-main)" }}
            >
              {auth.avatar ? (
                <img src={auth.avatar} alt="Avatar" />
              ) : (
                <img src="/user.png" alt="Default Avatar" />
              )}
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
            Login
          </div>
        )}
      </div>
    </div>
  );
};
