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

function CreateProject() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [projectId, setProjectId] = useState(null);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-main)",
        padding: "var(--padding-main)",
        paddingTop: "var(--nav-height)",
        alignItems: "center",
      }}
    >
      <Stepper steps={4} step={step} />
      {step === 1 && <Representative submit={() => setStep(2)} />}
      {step === 2 && <Organization submit={() => setStep(3)} />}
      {step === 3 && (
        <Project
          submit={(e) => {
            setProjectId(e);
            setStep(4);
          }}
        />
      )}
      {step === 4 && (
        <ProjectData
          submit={() => {
            navigate(`/myprojects/${projectId}`);
          }}
          projectId={projectId}
        />
      )}
    </div>
  );
}

export default CreateProject;
