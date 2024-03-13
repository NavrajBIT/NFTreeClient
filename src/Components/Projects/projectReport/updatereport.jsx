import usereport from "./usereport";
import Auth from "../../Auth/Auth";
import Myform from "../../Subcomponents/form/myform";
import { useParams } from "react-router-dom";
import LocalLoading from "../../Subcomponents/loading/localloading";
import Input from "../../Subcomponents/form/inputnew";
import { useState } from "react";
import "./updatereport.css";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

const Updatereport = () => {
  const params = useParams();
  const projectId = params.projectId;
  const script = usereport(projectId);
  const navigate = useNavigate();

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(false)} />;

<<<<<<< HEAD
  console.log(script);

=======
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
  const [reportData, setReportData] = useState({
    no_of_trees: "",
    tree_age: "",
    tree_diameter: "",
    height_of_each_tree: "",
    above_ground_biomass: "",
    below_ground_biomass: "",
    total_biomass: "",
    total_dry_waste: "",
    estimated_projection_of_GHG_removal: "",
  });

<<<<<<< HEAD
=======
  const handleChange = (key, value) => {
    setReportData((prev) => {
      let newdata = { ...prev };
      newdata[key] = value;
      return newdata;
    });
  };

  const handleSubmit = async () => {
    alert("Report updated successfully!");
    navigate(`/myprojects/${projectId}/report`);
  };

>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
<<<<<<< HEAD
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          minHeight: "var(--min-height-form)",
          background: "white",
          padding: "var(--padding-large)",
          flexDirection: "column",
          gap: "var(--padding-light)",
          borderRadius: "var(--border-radius)",
          boxShadow: "3px 4px 30px 0px",
          margin: "80px 0",
        }}
        className="containerPadding"
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--green-80)",
            width: "86%",
            marginBottom: "var(--padding-large)",
          }}
        >
          Update report form
          <p
            style={{
              border: "1px solid #E6E6E6",
              margin: "var(--padding-light) 0 0",
            }}
          />
        </div>

        <div>
          <div className="reportField">
            <div>
              <p>Number of Trees</p>
            </div>
            <div>
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.no_of_trees,
                  maxLength: 50,
                  errorField: "None",
                  onChange: (e) =>
                    setReportData({ ...Auth, no_of_trees: e.target.value }),
                }}
              />
            </div>
          </div>

=======
        paddingTop: "var(--nav-height)",
        padding:'10rem 0',
      }}
    >
      <div className="updateReportFormContainer">
        <h3>Update Report Form</h3>

        <form type="submit" onSubmit={handleSubmit}>
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
          <div className="reportField">
            <div>
              <p>Tree Age</p>
            </div>
            <div>
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.tree_age,
<<<<<<< HEAD
                  onChange: (e) =>
                    setReportData({ ...Auth, tree_age: e.target.value }),
=======
                  onChange: (e) => handleChange("tree_age", e.target.value),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <div className="reportField">
            <div>
              <p>Tree Diameter (species wise)</p>
            </div>
            <div>
              {" "}
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.tree_diameter,
                  onChange: (e) =>
<<<<<<< HEAD
                    setReportData({ ...Auth, tree_diameter: e.target.value }),
=======
                    handleChange("tree_diameter", e.target.value),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <div className="reportField">
            <div>
              <p>Height of each Tree species</p>
            </div>
            <div>
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.height_of_each_tree,
                  onChange: (e) =>
<<<<<<< HEAD
                    setReportData({
                      ...Auth,
                      height_of_each_tree: e.target.value,
                    }),
=======
                    handleChange("height_of_each_tree", e.target.value),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <div className="reportField">
            <div>
              <p>Above Ground Biomass</p>
            </div>
            <div>
              {" "}
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.above_ground_biomass,
                  onChange: (e) =>
<<<<<<< HEAD
                    setReportData({
                      ...Auth,
                      above_ground_biomass: e.target.value,
                    }),
=======
                    handleChange("above_ground_biomass", e.target.value),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <div className="reportField">
            <div>
              <p>Below Ground Biomass</p>
            </div>
            <div>
              {" "}
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.below_ground_biomass,
                  onChange: (e) =>
<<<<<<< HEAD
                    setReportData({
                      ...Auth,
                      below_ground_biomass: e.target.value,
                    }),
=======
                    handleChange("below_ground_biomass", e.target.value),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <div className="reportField">
            <div>
              <p>Total Biomass</p>
            </div>
            <div>
              {" "}
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.total_biomass,
                  onChange: (e) =>
<<<<<<< HEAD
                    setReportData({ ...Auth, total_biomass: e.target.value }),
=======
                    handleChange("total_biomass", e.target.value),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <div className="reportField">
            <div>
              <p>Total Dry Waste</p>
            </div>
            <div>
              {" "}
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.total_dry_waste,
                  onChange: (e) =>
<<<<<<< HEAD
                    setReportData({ ...Auth, total_dry_waste: e.target.value }),
=======
                    handleChange("total_dry_waste", e.target.value),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <div className="reportField">
            <div>
              <p>Estimated projection of GHG Removal</p>
            </div>
            <div>
              {" "}
              <Input
                inputData={{
                  type: "number",
                  required: true,
                  value: reportData.estimated_projection_of_GHG_removal,
                  onChange: (e) =>
<<<<<<< HEAD
                    setReportData({
                      ...Auth,
                      estimated_projection_of_GHG_removal: e.target.value,
                    }),
=======
                    handleChange(
                      "estimated_projection_of_GHG_removal",
                      e.target.value
                    ),
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

<<<<<<< HEAD
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
            Submit
          </button>
        </div>
=======
          <button type="submit" className="submitBtn">
            Submit
            <img src="/arrow_forward.png" alt="" />
          </button>
        </form>
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

        {script.isLoading && <LocalLoading />}
      </div>
    </div>
  );
};

export default Updatereport;
