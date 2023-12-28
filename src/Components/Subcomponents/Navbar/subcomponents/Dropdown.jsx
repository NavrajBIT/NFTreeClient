import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import { Typography, Divider } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";

const profileDropdown = [
  { to: "/profile", name: "Profile" },
  { to: "/home", name: "Logout" },
];

const Dropdown = ({ handleMouseLeave, setMobileOpen, dropdown }) => {
  const authContext = useAuth();
  return (
    <div
      style={{
        color: "black",
        backgroundColor: "white",
        position: "absolute",
        top: "100%",
        right: "var(--padding-light)",
        width: "fit-content",
        zIndex: "100",
        borderRadius: "var(--border-radius-light)",
      }}
    >
      <div style={{ margin: "auto" }}>
        {profileDropdown.map((elem, index) => {
          return (
            <Link
              key={"dropdown-" + index}
              to={elem.to}
              onClick={() => {
                handleMouseLeave();
                setMobileOpen(false);
                if (elem.name === "Logout") {
                  localStorage.removeItem("token");
                  sessionStorage.removeItem("token");
                  authContext.setIsLoggedIn(false);
                }
              }}
              className="dropdownLinks"
            >
              {elem.name === "Logout" && <LogoutIcon />}
              {elem.name === "Profile" && <Person2Icon />}
              <Typography variant="h6">{elem.name}</Typography>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
