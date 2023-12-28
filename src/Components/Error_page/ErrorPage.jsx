import { useNavigate } from "react-router";
import "./ErrorPage.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="Error-container">
      <h1>404 error</h1>
      <h2>This page does not exist.</h2>
      <p>Click below to go to Homepage</p>
      <div className="primarybutton" style={{ width: "fit-content" }}>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
}
