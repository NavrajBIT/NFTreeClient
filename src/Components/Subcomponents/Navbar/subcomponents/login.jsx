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
      <div className="secondarybutton homeButtonProp">
        <button
          onClick={() => navigate("/contact")}
          style={{
            background: "white",
            color: "var(--green-100)",
            width: "var(--project-button-small)",
          }}
        >
          Contact
        </button>
      </div>
      {!isLoggedIn ? (
        <div className="secondarybutton homeButtonProp">
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "var(--green-50)",
              color: "var(--green-100)",
              width: "var(--project-button-small)",
            }}
          >
            Login
          </button>
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
