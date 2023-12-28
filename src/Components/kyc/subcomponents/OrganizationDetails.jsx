import Myform from "../../Subcomponents/form/myform";
import useKyc from "../useKyc";
import FormStepper from "./FormStepper";

const OrganizationDetails = ({ script }) => {
  if (!script.organizationDetails) return null;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", padding: "var(--padding-main) 0px" }}>
        <FormStepper step={2} />
      </div>

      <Myform
        heading={"Organization Details"}
        formdata={script.organizationFormData}
        formButton={script.organizationChange ? "Save" : "Next"}
        handleSubmit={() => {
          script.handleSubmit("organization");
        }}
        error={script.error}
      />
    </div>
  );
};

export default OrganizationDetails;
