import Myform from "../../Subcomponents/form/myform";
import usecreate from "./usecreate";
import LocalLoading from "../../Subcomponents/loading/localloading";

const Createform = ({ selectedOption, setSelectedOption }) => {
  const { formdatafunding, formdatamonitoring, handleSubmit, isLoading } =
    usecreate();

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
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Myform
          heading={
            selectedOption === "funding"
              ? "Create Funding with Monitoring Project"
              : "Create Monitoring Project"
          }
          formdata={
            selectedOption === "monitoring"
              ? formdatamonitoring
              : formdatafunding
          }
          formButton="Get Started"
          handleSubmit={handleSubmit}
          close={() => setSelectedOption(null)}
        />
      </div>
      {isLoading && <LocalLoading />}
    </div>
  );
};

export default Createform;
