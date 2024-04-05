import { useEffect, useState } from "react";
import Representative from "../../Subcomponents/form/forms/representative";
import Stepper from "../../Subcomponents/stepper/stepper";
import Organization from "../../Subcomponents/form/forms/organization";
import Project from "../../Subcomponents/form/forms/project";
import ProjectData from "../../Subcomponents/form/forms/projectData";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";
import Auth from "../../Auth/Auth";

import "./CreateProject.css";

function CreateProject() {
  const auth = useAuth();
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    // representative data
    designation: "",
    phone: "",
    nin: "",
    nin_proof: null,
    picture: null,
    // organization data
    org_name: "",
    org_description: "",
    org_website: "",
    org_address: "",
    org_country: "",
    org_pin_code: "",
    org_reg_id: "",
    org_social_links: null,
    // project details
    type: 3,
    investment_type: "Carbon Credits",
    name: "",
    description: "",
    area: "",
    age: 0,
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

  const stepperData = [
    "Representative Details",
    "Organization Details",
    "Project Details",
    "Project Data",
  ];

  useEffect(() => {
    auth.poppulateUserData();
  }, []);

  if (!auth.isLoggedIn) return <Auth close={() => auth.setIsLoggedIn(true)} />;

  return (
    <div
      style={{
        backgroundImage:
          step == 1 || step == 3
            ? "linear-gradient(to bottom right, #243900, #EAFFC6)"
            : "linear-gradient(to top left, #243900, #EAFFC6)",
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
          padding: "var(--padding-main)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-light)",
          borderRadius: "var(--border-radius)",
          boxShadow: "3px 4px 30px 0px",
          margin: "var(--nav-height) 0",
        }}
      >
        <Stepper data={stepperData} step={step} />

        {step === 1 && (
          <Representative
            submit={() => {
              setStep(2);
            }}
            data={data}
            setData={setData}
          />
        )}
        {step === 2 && (
          <Organization
            submit={() => {
              setStep(3);
            }}
            backStep={() => {
              setStep(1);
            }}
            data={data}
            setData={setData}
          />
        )}
        {step === 3 && (
          <Project
            submit={() => {
              setStep(4);
            }}
            backStep={() => {
              setStep(2);
            }}
            data={data}
            setData={setData}
          />
        )}
        {step === 4 && (
          <ProjectData
            backStep={() => {
              setStep(3);
            }}
            data={data}
          />
        )}
      </div>
    </div>
  );
}

export default CreateProject;
