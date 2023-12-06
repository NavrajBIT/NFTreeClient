import usereport from "./usereport";
import Auth from "../../Auth/Auth";
import Myform from "../../form/myform";
import { useParams } from "react-router-dom";
import LocalLoading from "../../loading/localloading";

const Updatereport = () => {
  const params = useParams();
  const projectId = params.projectId;
  const script = usereport(projectId);

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(false)} />;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-main)",
        padding: "var(--padding-main) 0",
      }}
    >
      <div
        className="primarybutton"
        style={{ width: "fit-content", padding: " 0 var(--padding-main)" }}
      >
        <button onClick={() => script.goBack()}>{"< Back"}</button>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "0 var(--padding-main)",
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        {script?.project?.name}
      </div>
      {script.report && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Myform
            heading={"Update Project Report"}
            formdata={script.formData}
            formButton={script.hasChanged ? "Save" : "OK"}
            handleSubmit={script.handleSubmit}
          />
        </div>
      )}
      {script.isLoading && <LocalLoading />}
    </div>
  );
};

export default Updatereport;
