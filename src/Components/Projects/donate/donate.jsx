import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";
import LocalLoading from "../../Subcomponents/loading/localloading";
import { useEffect } from "react";
import Input from "../../Subcomponents/form/inputnew";
import { useAuth } from "../../../Contexts/AuthContext";

const Donate = () => {
  const params = useParams();
  const id = params.projectId;
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [project, setProject] = useState(null);
  const [trees, setTrees] = useState("");
  const navigate = useNavigate();
  const [contributionType, setContributionType] = useState("Donation");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    poppulateProject();
  }, []);

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

  let totalValue = 0;
  try {
    totalValue = project.donation * trees;
  } catch {}

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

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

    let endpoint = "project/invest";

    if (auth.isLoggedIn) endpoint = "project/userinvest";

    api
      .crud("POST", endpoint, {
        projectId: project.id,
        amount: totalUSD,
        trees: trees,
        tx_id: generateRandomString(50),
        name: name,
        email: email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    alert("Transaction Successfull! Thank you for your contribution.");
    setIsLoading(false);
    navigate("/");
  };

  const totalUSD = project?.donation ? project?.donation * trees : 0;
  const availableTrees = project?.funding?.total - project?.funding?.raised;

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
              Contribution Details
              <p
                style={{
                  border: "1px solid #E6E6E6",
                  margin: "var(--padding-light) 0 var(--padding-large)",
                }}
              />
            </div>
            <Input
              inputData={{
                label: "Project:",
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
            <Input
              inputData={{
                label: `Total amount in ${project?.currency}`,
                type: "text",
                value: `${totalUSD}`,
                onChange: (e) => {},
                maxLength: 500,
              }}
            />
            <Input
              inputData={{
                label: "Name",
                type: "text",
                value: name,
                required: true,
                onChange: (e) => {
                  setName(e.target.value);
                },
                maxLength: 100,
              }}
            />
            <Input
              inputData={{
                label: "Email",
                type: "email",
                value: email,
                required: true,
                onChange: (e) => {
                  setEmail(e.target.value);
                },
                maxLength: 100,
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "var(--padding-large)",
                justifyContent: "center",
              }}
            >
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
