import useAPI from "../../../../api/useAPI";
import { useState, useEffect } from "react";
import AuthPopup from "../../../Auth/authPopup";
import Loading from "../../loading/loading";
import Input from "../inputnew";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import currencies from "./currencies";

const Project = ({ backStep, submit, data, setData }) => {
  const [error, setError] = useState("");

  const projectKeys = [
    "type",
    "investment_type",
    "name",
    "description",
    "area",
    "age",
    "credits_produced",
    "plant_planned",
    "donation",
    "coordinates",
    // "address",
    "city",
    "country",
    // "pin_code",
    // "land_reg_proof",
    "image",
    // "revenue_dist_date",
    // "revenue_dist_details",
    // "roi",
    // "phase",
    // "donation_method",
  ];

  let currencyOptions = [];

  Object.keys(currencies).map((curr) => {
    currencyOptions.push({
      label: `${curr}(${currencies[curr]})`,
      value: `${curr}(${currencies[curr]})`,
    });
  });

  const changeValue = (key, value) => {
    setError("");
    setData((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const investOptions = [
    {
      label: "Carbon Credits",
      value: "Carbon Credits",
    },
    // {
    //   label: "Green Credits",
    //   value: "Green Credits",
    // },
  ];
  const donationOptions = [
    {
      label: "Both (Fiat and Crypto)",
      value: 1,
    },
    {
      label: "Crypto (Sol)",
      value: 2,
    },
    {
      label: "Fiat(USD, INR etc..)",
      value: 3,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    projectKeys.map((key) => {
      if (key === "credits_produced" || key === "age") return;
      if (!data[key] || data[key] === "") {
        console.log(key);
        setError("* All fields are required.");
        isValid = false;
      }
    });

    if (isNaN(data["area"])) {
      isValid = false;
      setError("Project area is not a valid number");
    }
    if (data["phase"] !== 1 && isNaN(data["age"])) {
      isValid = false;
      setError("Project age is not a valid number");
    }
    if (isNaN(data["donation"])) {
      isValid = false;
      setError("Investment is not a valid number");
    }

    if (isValid) submit();
  };

  return (
    <div
      style={{
        width: "90%",
        padding: "0 var(--padding-main)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "0 auto",
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
            fontWeight: "600",
            color: "var(--heading-color)",
          }}
        >
          Project Details
          <p
            style={{
              border: "1px solid #E6E6E6",
              margin: "var(--padding-light) 0 var(--padding-large)",
            }}
          />
        </div>

        {data.type == 3 && (
          <Input
            inputData={{
              label: "Investment Type",
              type: "select",
              required: true,
              value: (function () {
                let label = "";
                investOptions.map((type) => {
                  if (type.value === data.investment_type) {
                    label = type.label;
                  }
                });
                return label;
              })(),
              options: investOptions,
              select: true,
              onChange: (e) => {
                changeValue("investment_type", e.target.value);
              },
              maxLength: 50,
            }}
          />
        )}
        {/*  <Input
          inputData={{
            label: "Investment Method",
            type: "select",
            required: true,
            value: (function () {
              let label = "";
              donationOptions.map((type) => {
                if (type.value === data.donation_method) {
                  label = type.label;
                }
              });
              return label;
            })(),
            options: donationOptions,
            select: true,
            onChange: (e) => {
              changeValue("donation_method", e.target.value);
            },
            maxLength: 50,
          }}
        /> */}
        <Input
          inputData={{
            label: "Project Name (20 char max)",
            type: "text",
            required: true,
            value: data["name"],
            onChange: (e) =>
              e.target.value.length <= 20 &&
              changeValue("name", e.target.value),
            maxLength: 50,
          }}
        />
        <Input
          inputData={{
            label: "Description",
            type: "text",
            required: true,
            value: data["description"],
            onChange: (e) =>
              e.target.value.length <= 500 &&
              changeValue("description", e.target.value),
            maxLength: 500,
            multiline: true,
            rows: 4,
          }}
        />
        <Input
          inputData={{
            label: "Plantation Area (hect)",
            type: "text",
            acceptFloat: true,
            required: true,
            value: data["area"],
            onChange: (e) => changeValue("area", e.target.value),
            maxLength: 100,
          }}
        />
        {/* <Input
          inputData={{
            label: "Project Phase",
            type: "select",
            required: true,
            value: (function () {
              let label = "";
              phaseOptions.map((type) => {
                if (type.value == data.phase) {
                  label = type.label;
                }
              });
              return label;
            })(),
            options: phaseOptions,
            select: true,
            onChange: (e) => {
              changeValue("phase", e.target.value);
              changeValue("age", 0);
            },
            maxLength: 50,
          }}
        /> */}
        {data.phase == 2 && (
          <Input
            inputData={{
              label: "Project Age (Years)",
              type: "text",
              // onlyNumber: trrue,
              acceptFloat: true,
              required: true,
              value: data["age"],
              onChange: (e) => changeValue("age", e.target.value),
              maxLength: 100,
            }}
          />
        )}
        {data.phase == 2 && (
          <Input
            inputData={{
              label: "Have you Produced Carbon/Green Credits Earlier?",
              type: "select",
              required: true,
              value: data.credits_produced ? "Yes" : "No",
              options: creditsProducedOptions,
              select: true,
              onChange: (e) => {
                changeValue("credits_produced", e.target.value === "true");
              },
              maxLength: 50,
            }}
          />
        )}
        <Input
          inputData={{
            label: "Number of Trees",
            type: "text",
            onlyNumber: true,
            required: true,
            value: data["plant_planned"],
            onChange: (e) => changeValue("plant_planned", e.target.value),
            maxLength: 100,
          }}
        />

        <Input
          inputData={{
            label: `Cost per plant ${data.currency}`,

            type: "text",
            onlyNumber: true,
            acceptFloat: true,
            required: true,
            value: data["donation"],
            onChange: (e) => changeValue("donation", e.target.value),
            maxLength: 100,
          }}
        />

        <Input
          inputData={{
            label: "Currency",
            type: "select",
            required: true,
            value: (function () {
              let label = "";
              currencyOptions.map((type) => {
                if (type.value === data.currency) {
                  label = type.label;
                }
              });
              return label;
            })(),
            options: currencyOptions,
            select: true,
            onChange: (e) => {
              changeValue("currency", e.target.value);
            },
            maxLength: 50,
          }}
        />
        {/* {project.type != 1 && (
          <div style={{ padding: "var(--padding-main) 0" }}>
            Total amount to be raised = {project.type === 2 ? " $" : " $"}
            {(function () {
              let total =
                parseFloat(project.plant_planned) *
                parseFloat(project.donation);
              if (!total) total = 0;
              return total;
            })()}
          </div>
        )} */}
        {/* {data.type == 3 && (
          <Input
            inputData={{
              label: "Revenue Distribution Cycle Details",
              type: "text",
              required: true,
              value: data["revenue_dist_details"],
              onChange: (e) =>
                changeValue("revenue_dist_details", e.target.value),
              maxLength: 500,
              multiline: true,
              rows: 4,
            }}
          />
        )}
        {data.type == 3 && (
          <Input
            inputData={{
              label: "Upcoming Revenue Distribution Date ",
              type: "date",
              required: true,
              value: data["revenue_dist_date"],
              onChange: (e) => changeValue("revenue_dist_date", e.target.value),
              maxLength: 500,
            }}
          />
        )}
        {data.type == 3 && (
          <Input
            inputData={{
              label: "Expected Approximate ROI(%)",
              type: "text",
              required: true,
              onlyNumber: true,
              acceptFloat: true,
              value: data["roi"],
              onChange: (e) => changeValue("roi", e.target.value),
              maxLength: 10,
            }}
          />
        )} */}
        <Input
          inputData={{
            label: "Project Coordinates(comma separated)",
            type: "text",
            required: true,

            value: data["coordinates"],
            onChange: (e) => changeValue("coordinates", e.target.value),
            maxLength: 500,
          }}
        />
        {/* <Input
          inputData={{
            label: "Address",
            type: "text",
            required: true,
            value: data["address"],
            onChange: (e) => changeValue("address", e.target.value),
            maxLength: 500,
            multiline: true,
            rows: 4,
          }}
        /> */}
        <Input
          inputData={{
            label: "State",
            type: "text",
            required: true,
            value: data["city"],
            onChange: (e) => changeValue("city", e.target.value),
            maxLength: 100,
          }}
        />
        <Input
          inputData={{
            label: "Country",
            type: "text",
            required: true,
            value: data["country"],
            onChange: (e) => changeValue("country", e.target.value),
            maxLength: 100,
          }}
        />
        {/* <Input
          inputData={{
            label: "Area Code",
            type: "text",
            required: true,
            value: data["pin_code"],
            onChange: (e) => changeValue("pin_code", e.target.value),
            maxLength: 100,
          }}
        /> */}
        {/* <Input
          inputData={{
            label: "Land Registration Proof",
            type: "file",
            required: true,
            value: data?.land_reg_proof?.name,
            onChange: (e) => changeValue("land_reg_proof", e.target.files[0]),
            maxLength: 100,
          }}
        /> */}
        <Input
          inputData={{
            label: "Project Image",
            type: "file",
            required: true,
            value: data?.image?.name,
            onChange: (e) => changeValue("image", e.target.files[0]),
            maxLength: 100,
          }}
        />
        <div style={{ color: "var(--error)" }}>{error}</div>
        <div style={{ display: "flex", gap: "var(--padding-large)" }}>
          <button
            onClick={backStep}
            style={{
              padding: "var(--padding-light)",
              width: "var(--project-button-small)",
              borderRadius: "5px",
              marginTop: "var(--padding-large)",
              marginBottom: "100px",
              border: "2px solid #B6B6B6",
              color: "#525252",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <GrLinkPrevious />
              <p>Back</p>
            </div>
          </button>

          <button
            type="submit"
            style={{
              padding: "var(--padding-light)",
              background: "#354A12",
              width: "var(--project-button-small)",
              borderRadius: "5px",
              marginTop: "var(--padding-large)",
              marginBottom: "100px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p>Next</p>
              <GrLinkNext />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Project;
