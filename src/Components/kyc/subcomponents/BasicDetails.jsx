import Myform from "../../Subcomponents/form/myform";
import FormStepper from "./FormStepper";

const BasicDetails = ({ script }) => {
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
        <FormStepper step={0} />
      </div>

      <Myform
        heading={"Basic Details"}
        formdata={script.primaryFormData}
        formButton={
          script.primaryChange || script.emailChange ? "Save" : "Next"
        }
        handleSubmit={() => {
          script.handleSubmit("primary");
        }}
        error={script.error}
      />
    </div>
  );
};

export default BasicDetails;
