import React, { useEffect, useState } from "react";
import Loading from "../../Subcomponents/loading/loading";
import Auth from "../../Auth/Auth";
import Representative from "../../Subcomponents/form/forms/representative";
import Createform from "./createform";
import Stepper from "../../Subcomponents/stepper/stepper";
import Organization from "../../Subcomponents/form/forms/organization";
import Project from "../../Subcomponents/form/forms/project";
import ProjectData from "../../Subcomponents/form/forms/projectData";
import { useNavigate } from "react-router-dom";
import Myform from "../../Subcomponents/form/myformnew";

import "./CreateProject.css";

function CreateProject() {
  const navigate = useNavigate();
  const [projectId, setProjectId] = useState(null);
  const [step, setStep] = useState(4);

  const stepperData = [
    "Representative Details",
    "Organization Details",
    "Project Details",
    "Project Data",
  ];

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom right, #243900, #eaffc6)",
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
          margin: "10% 0",
        }}
      >
        <Stepper data={stepperData} step={step} />

        {step === 1 && <Representative submit={() => setStep(2)} />}
        {step === 2 && (
          <Organization
            submit={() => setStep(3)}
            backStep={() => {
              setStep(1);
            }}
          />
        )}
        {step === 3 && (
          <Project
            submit={(e) => {
              setProjectId(e);
              setStep(4);
            }}
            backStep={() => {
              setStep(2);
            }}
          />
        )}
        {step === 4 && (
          <ProjectData
            submit={() => {
              navigate(`/myprojects/${projectId}`);
            }}
            backStep={() => {
              setStep(3);
            }}
            projectId={projectId}
          />
        )}
      </div>
    </div>
  );
}

export default CreateProject;
