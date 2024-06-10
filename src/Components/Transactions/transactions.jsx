import "./transactions.css";
import Searchbar from "./subcomponents/searchbar";
import Txtable from "./subcomponents/txtable";
import Pagination from "./subcomponents/pagination";
import usetransactions from "./usetransactions";
import Auth from "../Auth/Auth";
import LocalLoading from "../Subcomponents/loading/localloading";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Transactions = () => {
  const usetx = usetransactions();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  if (!usetx.isLoggedIn)
    return <Auth close={() => usetx.setIsLoggedIn(true)} />;

  if (!usetx?.projects || usetx?.projects?.length < 1) {
    return (
      <div className="txpage">
        <div className="navbg" />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          <h2>No Projects Found...</h2>
          <button
            style={{
              padding: "20px",
              background: "green",
            }}
            onClick={() => navigate("/projects/create")}
          >
            Create new Project +
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="txpage">
      <div className="navbg" />
      {usetx.isLoading && <LocalLoading />}
      <div className="txcontainer">
        <Searchbar usetx={usetx} />
        <Txtable usetx={usetx} isMobile={isMobile} />
        <Pagination usetx={usetx} isMobile={isMobile} />
      </div>
    </div>
  );
};

export default Transactions;
