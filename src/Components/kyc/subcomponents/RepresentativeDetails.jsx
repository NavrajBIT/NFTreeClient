import Myform from "../../Subcomponents/form/myform";
import useKyc from "../useKyc";
import FormStepper from "./FormStepper";

const RepresentativeDetails = ({ setCurrentPage }) => {
  const script = useKyc();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "var(--min-height-page)",
      }}
    >
      <div style={{ width: "100%", padding: "var(--padding-main) 0px" }}>
        <FormStepper step={2} />
      </div>

      <Myform
        heading={"Representative Details"}
        formdata={script.RepresentativeForm}
        formButton="Next"
        handleSubmit={() => {
          script.HandleRepresentativeData();
          script.handleNextPage();
        }}
        back={() => script.handlePrevPage()}
      ></Myform>
    </div>
  );
};

export default RepresentativeDetails;
