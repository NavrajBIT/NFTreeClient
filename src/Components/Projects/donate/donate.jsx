import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import Myform from "../../Subcomponents/form/myform";
import { useState } from "react";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";
import { useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import usewallet from "./usewallet";

const Donate = () => {
  const params = useParams();
  const id = params.projectId;
  const api = useAPI();

  const authContext = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [project, setProject] = useState(null);
  const [trees, setTrees] = useState("");

  const wallet = usewallet(setIsLoading, id, trees);

  useEffect(() => {
    poppulateProject();
    checkLogIn();
  }, []);

  const checkLogIn = async () => {
    setIsLoading(true);
    await api
      .crud("GET", "user/kyc")
      .then((res) => console.log(res))
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const poppulateProject = async () => {
    setIsLoading(true);

    await api
      .crud("GET", `project/${id}`)
      .then((res) => {
        if (res.status === 200) setProject(res);
      })
      .catch((err) => {});
    setIsLoading(false);
  };

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

  if (isLoading || !project) return <Loading />;

  let totalValue = 0;
  try {
    totalValue = project.donation * trees;
  } catch {}

  const donationText = project.carbonCredit_enabled ? "Invest" : "Donate";

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        minHeight: "var(--min-height-page)",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        flexDirection: "column",
      }}
    >
      <Myform
        heading={`${donationText} for ${project.name} (${project.donation}$/tree)`}
        formButton={
          totalValue > 0 ? `${donationText} ${totalValue}$` : `${donationText}`
        }
        close={() => {
          navigate(-1);
        }}
        handleSubmit={() => wallet.transact(totalValue)}
        formdata={[
          [
            {
              type: "number",
              label: "No of trees",
              value: trees,
              required: true,
              onChange: (e) => setTrees(e.target.value),
            },
            {
              type: "text",
              label: "Wallet Address",
              value: wallet.walletAddress,
              required: true,
            },
          ],
        ]}
      />
      {!wallet.walletInstalled && (
        <div style={{ padding: "var(--padding-main)", color: "red" }}>
          <p>
            It seems Wallet is not Installed, Please Install{" "}
            <span>
              <a
                href="http://localhost:5173/wallet"
                style={{ textDecoration: "underline" }}
              >
                BitWallet
              </a>
            </span>{" "}
            to make any Investment
          </p>
        </div>
      )}
      {wallet.walletInstalled && !wallet.walletConnected && (
        <div style={{ padding: "var(--padding-main)", color: "red" }}>
          Please connect BitWallet to make the investment.
          <div className="primarybutton">
            <button onClick={() => wallet.connectWallet()}>Connect</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
