import { useAuth } from "../../../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profiledropdown = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div className="profiledropdown">
      <div className="profiledropdownitem" onClick={() => navigate("/profile")}>
        Profile
      </div>
      <div className="profiledropdownitem" onClick={() => auth.logout()}>
        Logout
      </div>
    </div>
  );
};

export default Profiledropdown;
