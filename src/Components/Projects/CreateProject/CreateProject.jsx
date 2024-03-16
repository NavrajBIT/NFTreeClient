import { useState } from "react";
import Representative from "../../Subcomponents/form/forms/representative";
import Stepper from "../../Subcomponents/stepper/stepper";
import Organization from "../../Subcomponents/form/forms/organization";
import Project from "../../Subcomponents/form/forms/project";
import ProjectData from "../../Subcomponents/form/forms/projectData";
import { useNavigate } from "react-router-dom";

import "./CreateProject.css";

function CreateProject() {
  const navigate = useNavigate();
  const [projectId, setProjectId] = useState(null);
  const [step, setStep] = useState(4);
  const [createFormData, setCreateFormData] = useState({
    representative: {},
    organization: {},
    projectDetail: {},
    projectData: {},
  });

  const stepperData = [
    "Representative Details",
    "Organization Details",
    "Project Details",
    "Project Data",
  ];

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
            submit={(data) => {
              setStep(2);
              setCreateFormData({ ...createFormData, representative: data });
            }}
            data={createFormData}
          />
        )}
        {step === 2 && (
          <Organization
            submit={(data) => {
              setStep(3);
              setCreateFormData({ ...createFormData, organization: data });
            }}
            backStep={() => {
              setStep(1);
            }}
            data={createFormData}
          />
        )}
        {step === 3 && (
          <Project
            submit={(data) => {
              setCreateFormData({ ...createFormData, projectDetail: data });
              setStep(4);
            }}
            backStep={() => {
              setStep(2);
            }}
            data={createFormData}
          />
        )}
        {step === 4 && (
          <ProjectData
            submit={(projectId) => {
              navigate(`/myprojects/${projectId}`);
            }}
            backStep={() => {
              setStep(3);
            }}
            data={createFormData}
          />
        )}
      </div>
    </div>
  );
}

export default CreateProject;
