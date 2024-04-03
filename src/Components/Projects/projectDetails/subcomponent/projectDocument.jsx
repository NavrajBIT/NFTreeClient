import ProjectDocumentBox from "./projectDocumentBox";
import { RiLoopLeftFill } from "react-icons/ri";
import { useRef, useState, useEffect } from "react";
import Input from "../../../Subcomponents/form/inputnew";

const ProjectDocument = ({ isOwnerView, details }) => {
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const [seeMore, setSeeMore] = useState(false);
  const [docPopUp, setDocPopUp] = useState(false);
  const [doc, setDoc] = useState({ name: "", file: "" });
  const [error, setError] = useState("");
  const updatebuttonref = useRef(null);

  useEffect(() => {
    if (docPopUp) {
      document.body.style.overflow = "hidden";
    }
  }, [docPopUp]);

  useEffect(() => {
    details.poppulateProjectDocs();
  }, []);

  const handleUpload = async () => {
    if (doc.name == "" || doc.file == "") {
      setError("name and file are required");
    } else {
      await details.uploadProjectDoc(doc.file, doc.name);
      setDoc({ name: "", file: "" });
      setDocPopUp(false);
      setError("");
    }
  };

  return (
    <div className="projectDocumentContainer">
      <div>
        <h1
          style={{
            color: "white",
          }}
          className="projectHeading"
        >
          Project Documents
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          justifyItems: "center",
          marginTop: "2rem",
          gap: "30px 20px",
          marginTop: "20px",
          padding: "20px",
          minHeight: "clamp(100px,20vw,282px)",
        }}
      >
        <ProjectDocumentBox
          doc={details?.project?.land_reg_proof}
          name={"land Reg proof"}
        />
        <ProjectDocumentBox
          doc={API_URL.split("api")[0] + details?.project?.nin_proof}
          name={"nin proof"}
        />
        {details?.projectDocs?.map(
          (doc, index) =>
            (index < 2 || seeMore) && (
              <ProjectDocumentBox
                doc={doc.file}
                key={`project-doc-${index}`}
                name={doc.name}
              />
            )
        )}
      </div>
      {details?.projectDocs?.length >= 3 && (
        <span
          style={{
            fontWeight: "500",
            position: "absolute",
            right: "8%",
            fontSize: "18px",
            color: "white",
            cursor: "pointer",
          }}
          className="SeeMoreText"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "See Less..." : "See more..."}
        </span>
      )}
      {isOwnerView && (
        <div style={{ textAlign: " center" }}>
          <button
            style={{
              background: " rgba(204, 229, 160, 1)",
              borderRadius: "4px",
              padding: "1% 5%",
              fontSize: "unset",
              display: "inline-flex",
              alignItems: "center",
            }}
            className="updateDocButton"
            onClick={() => {
              // updatebuttonref.current.click();
              setDocPopUp(!docPopUp);
            }}
          >
            <span
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "black",
                marginRight: "10px",
              }}
            >
              Update Documents
            </span>
            <RiLoopLeftFill size={20} color={"black"} />
          </button>
        </div>
      )}

      {docPopUp && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            background: "#000000d9",
            top: "0",
            left: "0",
          }}
        >
          <div
            style={{
              background: "#84b071",
              padding: "5%",
              borderRadius: "20px",
              textAlign: "center",
              position: "fixed",
              width: "50%",
              minWidth: "330px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h2
              style={{
                position: "absolute",
                right: "2%",
                top: "4%",
                cursor: "pointer",
              }}
              onClick={() => setDocPopUp(!docPopUp)}
            >
              X
            </h2>
            <h1
              style={{
                paddingBottom: "5%",
              }}
            >
              Upload Document
            </h1>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "20px",
                flexDirection: "column",
                margin: "auto",
                textAlign: "start",
              }}
            >
              <Input
                inputData={{
                  type: "text",
                  placeholder: "Document name",
                  value: doc["name"],
                  onChange: (e) => setDoc({ ...doc, name: e.target.value }),
                  maxLength: 100,
                }}
              />
              <Input
                inputData={{
                  type: "file",
                  value: doc["file"],
                  onChange: (e) => setDoc({ ...doc, file: e.target.files[0] }),
                  maxLength: 100,
                }}
              />
            </div>
            <p
              style={{
                color: "red",
                height: "15px",
                fontSize: "small",
                textAlign: "start",
              }}
            >
              {error}
            </p>
            <button
              style={{
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "black",
                marginRight: "10px",
                background: "#cce5a0",
                padding: "10px 35px",
                borderRadius: "10px",
                fontWeight: "500",
                cursor: "pointer",
              }}
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDocument;
