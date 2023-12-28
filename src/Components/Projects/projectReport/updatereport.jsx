import usereport from "./usereport";
import Auth from "../../Auth/Auth";
import Myform from "../../Subcomponents/form/myform";
import { useParams } from "react-router-dom";
import LocalLoading from "../../Subcomponents/loading/localloading";

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
        padding: "var(--nav-height) 0",
      }}
    >
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
            heading={"Update Report for " + script?.project?.name}
            formdata={script.formData}
            formButton={script.hasChanged ? "Save" : "OK"}
            handleSubmit={script.handleSubmit}
            close={() => script.goBack()}
          />
        </div>
      )}
      {script.isLoading && <LocalLoading />}
    </div>
  );
};

export default Updatereport;
