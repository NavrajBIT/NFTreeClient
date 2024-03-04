import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import Myform from "../../Subcomponents/form/myformnew";
import { useState } from "react";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";
import { useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import usewallet from "./usewallet";
import Input from "../../Subcomponents/form/inputnew";

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

  const projectDonateFormData = [
    [
      {
        type: "select",
        label: "Invest in",
        value: trees,
        required: true,
        onChange: (e) => setTrees(e.target.value),
        placeholder: "Project Name",
        options: [],
      },
      {
        type: "select",
        label: "Investment Token",
        value: trees,
        required: true,
        onChange: (e) => setTrees(e.target.value),
        options: [],
        placeholder: "Select",
      },
      {
        type: "number",
        label: "Enter number of trees",
        value: trees,
        required: true,
        onChange: (e) => setTrees(e.target.value),
      },
      {
        type: "number",
        label: "Total amount in selected token",
        value: wallet.walletAddress,
        onChange: (e) => setTrees(e.target.value),
        placeholder: "Display Amount",
      },
      wallet.walletConnected && {
        type: "text",
        label: "Connected Wallet Address",
        value: wallet.walletAddress,
        onChange: (e) => setTrees(e.target.value),
        placeholder: "Wallet Address",
      },
      wallet.walletConnected && {
        type: "text",
        label: "Connected Wallet Balance",
        value: wallet.walletAddress,
        onChange: (e) => setTrees(e.target.value),
        placeholder: "Display Balance",
      },
    ],
  ];

  console.log(project);

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left top, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width-form)",
          minHeight: "var(--min-height-form)",
          background: "white",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-light)",
          borderRadius: "var(--border-radius)",
          boxShadow: "3px 4px 30px 0px",
          margin: "10% 0",
        }}
      >
        <form
          style={{
            width: "100%",
            maxWidth: "var(--max-width-form)",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "var(--padding-light)",
          }}
          id={"formId"}
          onSubmit={""}
        >
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "var(--green-80)",
            }}
          >
            Investment Details
            <p
              style={{
                border: "1px solid #E6E6E6",
                margin: "var(--padding-light) 0 var(--padding-large)",
              }}
            />
          </div>
          <Input
            inputData={{
              label: "Invest In",
              type: "text",
              required: true,
              value: project.name,
              maxLength: 50,
            }}
          />

          <Input
            inputData={{
              label: "Enter number of trees",
              type: "number",
              required: true,
              value: trees,
              onChange: (e) => setTrees(e.target.value),
              maxLength: 50,
            }}
          />
          <Input
            inputData={{
              label: "Investment Token",
              type: "select",
              required: true,
              value: {},
              options: [],
              select: true,
              onChange: (e) => {
                changeValue("type", e.target.value);
              },
              maxLength: 50,
            }}
          />
          <Input
            inputData={{
              label: "Total amount in selected token",
              type: "number",

              value: project["description"],
              onChange: (e) => changeValue("description", e.target.value),
              maxLength: 500,
            }}
          />

          {wallet.walletConnected && (
            <div>
              <Input
                inputData={{
                  label: "Connected Wallet Address",
                  type: "text",
                  value: wallet.walletAddress,
                  maxLength: 500,
                }}
              />
              <Input
                inputData={{
                  label: "Connected Wallet Balance",
                  type: "text",
                  value: wallet.walletAddress,
                  maxLength: 500,
                }}
              />
            </div>
          )}

<<<<<<< HEAD
          {/* <div style={{ color: "var(--error)" }}>{error}</div> */}
=======
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
          <div
            style={{
              display: "flex",
              gap: "var(--padding-large)",
              justifyContent: "center",
            }}
          >
            <button
              type="submit"
              onClick={() =>
                wallet.walletConnected
                  ? wallet.transact(totalValue)
                  : wallet.connectWallet()
              }
              style={{
                padding: "var(--padding-light)",
                background: "#354A12",
                width: "var(--project-button)",
                borderRadius: "5px",
                marginTop: "var(--padding-large)",
                marginBottom: "100px",
              }}
            >
              {wallet.walletConnected ? "Invest" : "Connect"}
            </button>
          </div>
        </form>
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
<<<<<<< HEAD
        {/* {wallet.walletInstalled && !wallet.walletConnected && (
          <div style={{ padding: "var(--padding-main)", color: "red" }}>
            Please connect BitWallet to make the investment.
            <div className="primarybutton">
              <button onClick={() => wallet.connectWallet()}>Connect</button>
            </div>
          </div>
        )} */}
=======
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
      </div>
    </div>
  );

  // return (
  //   <div
  //     style={{
  //       width: "100%",
  //       display: "flex",
  //       minHeight: "var(--min-height-page)",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       paddingTop: "var(--nav-height)",
  //       flexDirection: "column",
  //     }}
  //   >
  //     <Myform
  //       heading={`${donationText} for ${project.name} (${project.donation}$/tree)`}
  //       formButton={
  //         totalValue > 0 ? `${donationText} ${totalValue}$` : `${donationText}`
  //       }
  //       close={() => {
  //         navigate(-1);
  //       }}
  //       handleSubmit={() => wallet.transact(totalValue)}
  //       formdata={[
  //         [
  //           {
  //             type: "number",
  //             label: "No of trees",
  //             value: trees,
  //             required: true,
  //             onChange: (e) => setTrees(e.target.value),
  //           },
  //           {
  //             type: "text",
  //             label: "Wallet Address",
  //             value: wallet.walletAddress,
  //             required: true,
  //           },
  //         ],
  //       ]}
  //     />
  //     {!wallet.walletInstalled && (
  //       <div style={{ padding: "var(--padding-main)", color: "red" }}>
  //         <p>
  //           It seems Wallet is not Installed, Please Install{" "}
  //           <span>
  //             <a
  //               href="http://localhost:5173/wallet"
  //               style={{ textDecoration: "underline" }}
  //             >
  //               BitWallet
  //             </a>
  //           </span>{" "}
  //           to make any Investment
  //         </p>
  //       </div>
  //     )}
  //     {wallet.walletInstalled && !wallet.walletConnected && (
  //       <div style={{ padding: "var(--padding-main)", color: "red" }}>
  //         Please connect BitWallet to make the investment.
  //         <div className="primarybutton">
  //           <button onClick={() => wallet.connectWallet()}>Connect</button>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Donate;
