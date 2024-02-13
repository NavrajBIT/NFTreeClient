import useAPI from "../../../../api/useAPI";
import { useState } from "react";
import Auth from "../../../Auth/Auth";
import Loading from "../../loading/loading";
import Input from "../input";

const Project = ({ submit }) => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [project, setproject] = useState({
    type: 1,
    investment_type: "Carbon Credits",
    name: "",
    description: "",
    area: "",
    age: "",
    credits_produced: false,
    plant_planned: "",
    donation: "",
    coordinates: "",
    address: "",
    city: "",
    country: "",
    pin_code: "",
    land_reg_proof: null,
    image: null,
    revenue_dist_date: "",
    revenue_dist_details: "",
    roi: "",
    phase: 1,
  });
  const changeValue = (key, value) => {
    setproject((prev) => {
      let newValues = { ...prev };
      newValues[key] = value;
      return newValues;
    });
  };
  const typeOptions = [
    {
      label: "Monitoring & Reporting",
      value: 1,
    },
    {
      label: "Funding and Monitoring",
      value: 2,
    },
    {
      label: "Investment",
      value: 3,
    },
  ];
  const investOptions = [
    {
      label: "Carbon Credits",
      value: "Carbon Credits",
    },
    {
      label: "Green Credits",
      value: "Green Credits",
    },
  ];
  const phaseOptions = [
    {
      label: "New Project",
      value: 1,
    },
    {
      label: "Existing Project",
      value: 2,
    },
  ];
  const creditsProducedOptions = [
    {
      label: "Yes",
      value: true,
    },
    {
      label: "No",
      value: false,
    },
  ];

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;
  if (isLoading) return <Loading />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!project.image || !project.land_reg_proof) {
      setError("Please upload registration proof and project image.");
      return;
    }
    let formdata = new FormData();
    Object.keys(project).map((key) => {
      formdata.append(key, project[key]);
    });
    setIsLoading(true);
    api
      .crud("POST", "project/myproject", formdata, true)
      .then((res) => {
        if (res.status === 201) {
          submit(res.id);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          fontSize: "1.5rem",
          color: "var(--green-30)",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Project Details
      </div>
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
        <Input
          inputData={{
            label: "Project Type",
            type: "select",
            required: true,
            value: (function () {
              let label = "";
              typeOptions.map((type) => {
                if (type.value === project.type) {
                  label = type.label;
                }
              });
              return label;
            })(),
            options: typeOptions,
            select: true,
            onChange: (e) => {
              changeValue("type", e.value);
            },
            maxLength: 50,
          }}
        />
        {project.type === 3 && (
          <Input
            inputData={{
              label: "Investment Type",
              type: "select",
              required: true,
              value: (function () {
                let label = "";
                investOptions.map((type) => {
                  if (type.value === project.investment_type) {
                    label = type.label;
                  }
                });
                return label;
              })(),
              options: investOptions,
              select: true,
              onChange: (e) => {
                changeValue("investment_type", e.value);
              },
              maxLength: 50,
            }}
          />
        )}
        <Input
          inputData={{
            label: "Project Name",
            type: "text",
            required: true,
            value: project["name"],
            onChange: (e) => changeValue("name", e.target.value),
            maxLength: 50,
          }}
        />
        <Input
          inputData={{
            label: "Description",
            type: "text",
            required: true,
            value: project["description"],
            onChange: (e) => changeValue("description", e.target.value),
            maxLength: 500,
            multiline: true,
            rows: 4,
          }}
        />
        <Input
          inputData={{
            label: "Plantation Area (hect)",
            type: "number",
            required: true,
            value: project["area"],
            onChange: (e) => changeValue("area", e.target.value),
            maxLength: 100,
          }}
        />
        <Input
          inputData={{
            label: "Project Phase",
            type: "select",
            required: true,
            value: (function () {
              let label = "";
              phaseOptions.map((type) => {
                if (type.value === project.phase) {
                  label = type.label;
                }
              });
              return label;
            })(),
            options: phaseOptions,
            select: true,
            onChange: (e) => {
              changeValue("phase", e.value);
            },
            maxLength: 50,
          }}
        />
        {project.phase === 2 && (
          <Input
            inputData={{
              label: "Project Age (Months)",
              type: "number",
              required: true,
              value: project["age"],
              onChange: (e) => changeValue("age", e.target.value),
              maxLength: 100,
            }}
          />
        )}
        {project.phase === 2 && (
          <Input
            inputData={{
              label: "Have you Produced Carbon/Green Credits Earlier?",
              type: "select",
              required: true,
              value: (function () {
                let label = "";
                creditsProducedOptions.map((type) => {
                  if (type.value === project.credits_produced) {
                    label = type.label;
                  }
                });
                return label;
              })(),
              options: creditsProducedOptions,
              select: true,
              onChange: (e) => {
                changeValue("credits_produced", e.value);
              },
              maxLength: 50,
            }}
          />
        )}
        <Input
          inputData={{
            label: "Number of Trees",
            type: "number",
            required: true,
            value: project["plant_planned"],
            onChange: (e) => changeValue("plant_planned", e.target.value),
            maxLength: 100,
          }}
        />
        {project.type !== 1 && (
          <Input
            inputData={{
              label:
                project.type === 2
                  ? "Donation per plant($)"
                  : "Investment per plant(NEAR)",
              type: "number",
              required: true,
              value: project["donation"],
              onChange: (e) => changeValue("donation", e.target.value),
              maxLength: 100,
            }}
          />
        )}
        {project.type !== 1 && (
          <div>
            Total amount to be raised ={" "}
            {(function () {
              let total =
                parseFloat(project.plant_planned) *
                parseFloat(project.donation);
              if (!total) total = 0;
              return total;
            })()}
            {project.type === 2 ? "$" : "NEAR"}
          </div>
        )}
        {project.type === 3 && (
          <Input
            inputData={{
              label: "Revenue Distribution Cycle Details",
              type: "text",
              required: true,
              value: project["revenue_dist_details"],
              onChange: (e) =>
                changeValue("revenue_dist_details", e.target.value),
              maxLength: 500,
              multiline: true,
              rows: 4,
            }}
          />
        )}
        {project.type === 3 && (
          <Input
            inputData={{
              label: "Upcoming Revenue Distribution Date ",
              type: "date",
              required: true,
              value: project["revenue_dist_date"],
              onChange: (e) => changeValue("revenue_dist_date", e.target.value),
              maxLength: 500,
            }}
          />
        )}
        {project.type === 3 && (
          <Input
            inputData={{
              label: "Expected Approximate ROI(%)",
              type: "number",
              required: true,
              value: project["roi"],
              onChange: (e) => changeValue("roi", e.target.value),
              maxLength: 10,
            }}
          />
        )}
        <Input
          inputData={{
            label: "Project Coordinates(comma separated)",
            type: "text",
            required: true,
            value: project["coordinates"],
            onChange: (e) => changeValue("coordinates", e.target.value),
            maxLength: 500,
            multiline: true,
            rows: 4,
          }}
        />
        <Input
          inputData={{
            label: "Address",
            type: "text",
            required: true,
            value: project["address"],
            onChange: (e) => changeValue("address", e.target.value),
            maxLength: 500,
            multiline: true,
            rows: 4,
          }}
        />
        <Input
          inputData={{
            label: "State",
            type: "text",
            required: true,
            value: project["city"],
            onChange: (e) => changeValue("city", e.target.value),
            maxLength: 100,
          }}
        />
        <Input
          inputData={{
            label: "Country",
            type: "text",
            required: true,
            value: project["country"],
            onChange: (e) => changeValue("country", e.target.value),
            maxLength: 100,
          }}
        />
        <Input
          inputData={{
            label: "Area Code",
            type: "text",
            required: true,
            value: project["pin_code"],
            onChange: (e) => changeValue("pin_code", e.target.value),
            maxLength: 100,
          }}
        />
        <Input
          inputData={{
            label: "Land Registration Proof",
            type: "file",
            required: true,
            value: project["land_reg_proof"],
            onChange: (e) => changeValue("land_reg_proof", e.target.files[0]),
            maxLength: 100,
          }}
        />
        <Input
          inputData={{
            label: "Project Image",
            type: "file",
            required: true,
            value: project["image"],
            onChange: (e) => changeValue("image", e.target.files[0]),
            maxLength: 100,
          }}
        />
        <div style={{ color: "var(--error)" }}>{error}</div>
        <div className="primarybutton">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Project;
