import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import Myform from "../../Subcomponents/form/myform";
import { useState } from "react";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";
import { useEffect } from "react";

const Donate = () => {
  const params = useParams();
  const id = params.projectId;
  const api = useAPI();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [project, setProject] = useState(null);
  const [trees, setTrees] = useState("");

  useEffect(() => {
    poppulateProject();
  }, [isLoggedIn]);

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

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

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
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        minHeight: "var(--min-height-page)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Myform
        heading={`Donate for ${project.name} (${project.donation}$/tree)`}
        formButton={totalValue > 0 ? `Donate ${totalValue}$` : "Donate"}
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
