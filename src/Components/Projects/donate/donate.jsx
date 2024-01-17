import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import Myform from "../../Subcomponents/form/myform";
import { useState } from "react";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";
import { useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";

const Donate = () => {
  const params = useParams();
  const id = params.projectId;
  const api = useAPI();
  const authContext = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [project, setProject] = useState(null);
  const [trees, setTrees] = useState("");

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
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  if (!authContext.isLoggedIn)
    return <Auth close={() => authContext.setIsLoggedIn(true)} />;

  if (isLoading || !project) return <Loading />;

  let totalValue = 0;
  try {
    totalValue = project.donation * trees;
  } catch {}

  const handleSubmit = async () => {
    setIsLoading(true);
    await api
      .crud("POST", "project/transaction", {
        project: id,
        amount: totalValue,
        trees_count: trees,
      })
      .then((res) => {
        alert("Thankyou for your contribution.");
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) authContext.setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

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
      }}
    >
      <Myform
        heading={`${donationText} for ${project.name} (${project.donation}$/tree)`}
        formButton={
          totalValue > 0 ? `${donationText} ${totalValue}$` : `${donationText}`
        }
        close={() => navigate(-1)}
        handleSubmit={handleSubmit}
        formdata={[
          [
            {
              type: "number",
              label: "No of trees",
              value: trees,
              required: true,
              onChange: (e) => setTrees(e.target.value),
            },
          ],
        ]}
      />
    </div>
  );
};

export default Donate;
