import "./transactions.css";
import Searchbar from "./subcomponents/searchbar";
import Txtable from "./subcomponents/txtable";
import Pagination from "./subcomponents/pagination";
import usetransactions from "./usetransactions";
import Auth from "../Auth/Auth";
import LocalLoading from "../Subcomponents/loading/localloading";

const Transactions = () => {
  const usetx = usetransactions();

  if (!usetx.isLoggedIn)
    return <Auth close={() => usetx.setIsLoggedIn(true)} />;
  return (
    <div className="txpage">
      <div className="navbg" />
      {usetx.isLoading && <LocalLoading />}
      <div className="txcontainer">
        <Searchbar usetx={usetx} />
        <Txtable usetx={usetx} />
        <Pagination usetx={usetx} />
      </div>
    </div>
  );
};

export default Transactions;
