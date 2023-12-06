import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";
import { Button } from "@mui/material";
import Dropdown from "../Dropdown";

const ContactLoginItems = ({ script }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "33.33%",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Link to="/contact" className="contactLink">
        Contact
      </Link>
      {!isLoggedIn ? (
        <Button
          variant="contained"
          className="filledBtn"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      ) : (
        <>
          <div
            style={{ position: "relative" }}
            onMouseOver={script.handleMouseEnterProfile}
            onMouseOut={script.handleMouseLeaveProfile}
          >
            <AccountCircleIcon
              sx={{
                color: "black",
                fontSize: "2.5rem",
                cursor: "pointer",
              }}
              onClick={() => navigate("/profile")}
            />
            {script.isMouseEnterProfile && (
              <Dropdown
                handleMouseLeave={script.handleMouseLeaveProfile}
                setMobileOpen={script.setMobileOpen}
                dropdown={"Profile"}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactLoginItems;
