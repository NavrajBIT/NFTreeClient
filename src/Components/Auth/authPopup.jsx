import Popup from "../Subcomponents/Popup/popup";
import { AuthForm } from "./Auth";
import { useNavigate } from "react-router-dom";

const AuthPopup = ({ close }) => {
  const navigate = useNavigate();
  return (
    <Popup close={() => navigate("/")}>
      <AuthForm close={close} />
    </Popup>
  );
};

export default AuthPopup;
