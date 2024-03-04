import usereport from "./usereport";
import Auth from "../../Auth/Auth";
import Myform from "../../Subcomponents/form/myform";
import { useParams } from "react-router-dom";
import LocalLoading from "../../Subcomponents/loading/localloading";
import Input from "../../Subcomponents/form/inputnew";
import { useState } from "react";
import "./updatereport.css";
import { useNavigate } from "react-router-dom";

const Updatereport = () => {
  const params = useParams();
  const projectId = params.projectId;
  const script = usereport(projectId);
  const navigate = useNavigate();

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(false)} />;

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

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        padding:'10rem 0',
      }}
    >
      <div className="updateReportFormContainer">
        <h3>Update Report Form</h3>

        <form type="submit" onSubmit={handleSubmit}>
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
                  onChange: (e) => handleChange("tree_age", e.target.value),
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
                    handleChange("tree_diameter", e.target.value),
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
                    handleChange("height_of_each_tree", e.target.value),
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
                    handleChange("above_ground_biomass", e.target.value),
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
                    handleChange("below_ground_biomass", e.target.value),
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
                    handleChange("total_biomass", e.target.value),
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
                    handleChange("total_dry_waste", e.target.value),
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
                    handleChange(
                      "estimated_projection_of_GHG_removal",
                      e.target.value
                    ),
                  maxLength: 50,
                  errorField: "None",
                }}
              />
            </div>
          </div>

          <button type="submit" className="submitBtn">
            Submit
            <img src="/arrow_forward.png" alt="" />
          </button>
        </form>

        {script.isLoading && <LocalLoading />}
      </div>
    </div>
  );
};

export default Updatereport;
