import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import Dropdown from "./Dropdown";
import Avatar from "@mui/material/Avatar";

const ContactLoginItems = ({ script }) => {
  const { isLoggedIn, avatar } = useAuth();
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "33.33%",
        display: "flex",
        gap: "var(--padding-light)",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Link to="/contact" className="contactLink">
        Contact
      </Link>
      {!isLoggedIn ? (
        <div className="primarybutton">
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      ) : (
        <div
          style={{ position: "relative" }}
          onMouseOver={script.handleMouseEnterProfile}
          onMouseOut={script.handleMouseLeaveProfile}
        >
          {avatar && avatar.picture ? (
            <Avatar
              src={avatar.picture}
              sx={{
                color: "var(--green-30)",
                fontSize: "2.5rem",
                cursor: "pointer",
              }}
            />
          ) : (
            <AccountCircleIcon
              sx={{
                color: "var(--green-30)",
                fontSize: "2.5rem",
                cursor: "pointer",
              }}
              onClick={() => navigate("/profile")}
            />
          )}

          {script.isMouseEnterProfile && (
            <Dropdown
              handleMouseLeave={script.handleMouseLeaveProfile}
              setMobileOpen={script.setMobileOpen}
              dropdown={"Profile"}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ContactLoginItems;
