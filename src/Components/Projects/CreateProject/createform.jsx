import Myform from "../../form/myform";
import usecreate from "./usecreate";
import LocalLoading from "../../loading/localloading";

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
      }}
    >
      <div className="primarybutton" style={{ width: "fit-content" }}>
        <button onClick={() => setSelectedOption(null)}>{"< Back"}</button>
      </div>
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
              ? "Create Funding Project"
              : "Create Monitoring Project"
          }
          formdata={
            selectedOption === "monitoring"
              ? formdatamonitoring
              : formdatafunding
          }
          formButton="Get Started"
          handleSubmit={handleSubmit}
        />
      </div>
      {isLoading && <LocalLoading />}
    </div>
  );
};

export default Createform;
