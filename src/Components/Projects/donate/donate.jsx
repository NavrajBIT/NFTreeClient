import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";
import LocalLoading from "../../Subcomponents/loading/localloading";
import { useEffect } from "react";
import Input from "../../Subcomponents/form/inputnew";
import { useWallet } from "../../../Contexts/walletContext";

const Donate = () => {
  const params = useParams();
  const id = params.projectId;
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [project, setProject] = useState(null);
  const [trees, setTrees] = useState("");
  const [token, setToken] = useState({ label: "$BHOOMI", value: "$BHOOMI" });
  const [exchangeRate, setExchangerate] = useState(0);
  const wallet = useWallet();
  const navigate = useNavigate();
  const [contributionType, setContributionType] = useState("Donation");

  useEffect(() => {
    poppulateProject();
    checkLogIn();
    // getExchangeRate();
  }, []);

  const checkLogIn = async () => {
    setIsLoading(true);
    await api
      .crud("GET", "user/account")
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
        console.log(res);
        if (res.status === 200) setProject(res);
      })
      .catch((err) => {});
    setIsLoading(false);
  };

  // const getExchangeRate = async () => {
  //   // setExchangerate(149);
  //   // return;
  //   setIsLoading(true);
  //   await fetch(
  //     "https://min-api.cryptocompare.com/data/pricemulti?fsyms=SOL&tsyms=SOL,USD&api_key=a0d74da5182505e471796936416d849166115c9f413ddad7f7e2caff213b0ae5"
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       console.log(`SOL exchange rate = ${res["SOL"]["USD"]}`);
  //       setExchangerate(parseFloat(res["SOL"]["USD"]));
  //     })
  //     .catch((err) => console.log(err));
  //   setIsLoading(false);
  // };

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

  let totalValue = 0;
  try {
    totalValue = project.donation * trees;
  } catch {}

  const donationText = project?.type === 3 ? "Invest" : "Donate";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      contributionType === "Donation" &&
      trees < parseInt(project?.min_trees_for_donation)
    ) {
      alert(
        `Minimum ${project?.min_trees_for_donation} trees are required for donation.`
      );
      return;
    }
    if (
      contributionType === "Investment" &&
      trees < parseInt(project?.min_trees_for_investment)
    ) {
      alert(
        `Minimum ${project?.min_trees_for_investment} trees are required for investment.`
      );
      return;
    }

    setIsLoading(true);
    // let tx = await wallet
    //   .sendSol(totalSol)
    //   .then((res) => res)
    //   .catch((err) => {
    //     alert("Transaction Unsuccessful.");
    //     return null;
    //   });
    // console.log("------------------");
    // console.log(tx);
    // if (!tx) {
    //   setIsLoading(false);
    //   return;
    // }

    api
      .crud("POST", "project/invest", {
        projectId: project.id,
        amount: totalUSD,
        trees: trees,
        hash: "",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    alert(
      "Order has been placed. You NFT will reflect in your profile shortly."
    );
    setIsLoading(false);
    navigate("/");
  };

  const totalUSD = project?.donation ? project?.donation * trees : 0;
  // const totalSol =
  //   exchangeRate && exchangeRate > 0 && project?.donation
  //     ? parseFloat(totalUSD) / parseFloat(exchangeRate)
  //     : 0;
  const availableTrees = project?.funding?.total - project?.funding?.raised;

  const investOptions = [
    {
      label: "Donation",
      value: "Donation",
    },
    {
      label: "Investment",
      value: "Investment",
    },
  ];

  return (
    <div
      style={{
        minHeight: "var(--min-height-page)",
        width: "100vw",
        background: "var(--bg-bright)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "var(--nav-height)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)",
        }}
      />

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
        {isLoading && <LocalLoading />}
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
            onSubmit={handleSubmit}
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

                value: project?.name,
                onChange: () => {},
                maxLength: 5000,
              }}
            />

            <Input
              inputData={{
                label: "Contribution Type",
                type: "text",

                value: project?.contribution_type,

                onChange: (e) => {},
                maxLength: 50,
              }}
            />

            <div
              style={{
                marginBottom: "10px",
              }}
            >
              {contributionType === "Donation" &&
                `Note: Minimum ${project?.min_trees_for_donation} trees are required.`}
              {contributionType === "Investment" &&
                `Note: Minimum ${project?.min_trees_for_investment} trees are required.`}
            </div>

            <Input
              inputData={{
                label: "Enter number of trees",
                type: "number",
                required: true,
                value: trees,
                onChange: (e) => {
                  if (e.target.value > availableTrees) {
                    setTrees(availableTrees);
                  } else {
                    setTrees(e.target.value);
                  }
                },
                maxLength: 50,
              }}
            />

            {/* <Input
            inputData={{
              label: "Investment Token",
              type: "select",
              required: true,
              value: token.value,
              options: [
                { label: "$BHOOMI", value: "$BHOOMI" },
                { label: "$SOL", value: "$SOL" },
              ],
              select: true,
              onChange: (e) => {
                setToken({ label: e.target.value, value: e.target.value });
              },
              maxLength: 50,
            }}
          /> */}
            <Input
              inputData={{
                label: `Total amount in ${project?.currency}`,
                type: "text",
                value: `${totalUSD}`,
                onChange: (e) => {},
                maxLength: 500,
              }}
            />
            {/* <Input
            inputData={{
              label: `Total amount in ${token.value} token`,
              type: "text",
              // value:
              //   exchangeRate && exchangeRate > 0
              //     ? (project?.donation * trees) / exchangeRate
              //     : 0,
              value: `${totalSol}SOL`,
              onChange: (e) => {},
              maxLength: 500,
            }}
          /> */}

            <div>
              {/* <Input
              inputData={{
                label: "Connected Wallet Address",
                type: "text",
                value: wallet?.isWalletConnected
                  ? wallet?.publicKey?.toString()
                  : "",
                onChange: () => {},
                maxLength: 500,
              }}
            /> */}
              {/* <Input
              inputData={{
                label: "Connected Wallet Balance",
                type: "text",
                value: `${wallet?.solbalance}${token.value}`,
                onChange: () => {},
                maxLength: 500,
              }}
            /> */}
            </div>

            <div
              style={{
                display: "flex",
                gap: "var(--padding-large)",
                justifyContent: "center",
              }}
            >
              {/* {wallet?.isWalletConnected ? (
              <button
                type="submit"
                style={{
                  padding: "var(--padding-light)",
                  background: "#354A12",
                  width: "var(--project-button)",
                  borderRadius: "5px",
                  marginTop: "var(--padding-large)",
                  marginBottom: "100px",
                }}
              >
                {wallet?.isWalletConnected ? donationText : "Connect Wallet"}
              </button>
            ) : (
              <div>Please connect wallet!</div>
            )} */}
              <button
                type="submit"
                style={{
                  padding: "var(--padding-light)",
                  background: "#354A12",
                  width: "var(--project-button)",
                  borderRadius: "5px",
                  marginTop: "var(--padding-large)",
                  marginBottom: "100px",
                }}
              >
                Contribute
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
