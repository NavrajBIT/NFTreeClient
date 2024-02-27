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
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          minHeight: "var(--min-height-form)",
          background: "white",
          padding: "var(--padding-main)",
          flexDirection: "column",
          gap: "var(--padding-light)",
          borderRadius: "var(--border-radius)",
          boxShadow: "3px 4px 30px 0px",
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
            Submit
          </button>
        </form>

        {script.isLoading && <LocalLoading />}
      </div>
    </div>
  );
};

export default Updatereport;
