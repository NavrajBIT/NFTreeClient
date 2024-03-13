import { useState, useEffect } from "react";
import useAPI from "../../../../api/useAPI";
import Input from "../inputnew";
import AuthPopup from "../../../Auth/authPopup";
import Loading from "../../loading/loading";
import { Delete } from "@mui/icons-material";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import "./forms.css";

const ProjectData = ({ submit, backStep, data }) => {
  const [species, setSpecies] = useState([{ plant: "", percentage: "" }]);
  const [docs, setdocs] = useState([{ file: null, name: "" }]);
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [projectId, setProjectId] = useState();
  const [error, setError] = useState("");

  const changeValue = (key, value, index) => {
    setSpecies((prev) => {
      let newValues = [...prev];
      newValues[index][key] = value;
      return newValues;
    });
  };

  const uploadDoc = async (index, name, file) => {
    if (name == "file") {
      const fileName = file.name.replace(/\s+/g, "_");
      file = new File([file], fileName, { type: file.type });
    }

    setIsLoading(true);
    // await api
    //   .crud("POST", endpoint, formdata, true)
    //   .then((res) => {
    //     if (res.status === 201) {
    //       setdocs((prev) => {
    //         let newvalues = [...prev];
    //         newvalues[index]["file"] = fileName;
    //         return newvalues;
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     if (err === 401) setIsLoggedIn(false);
    //   });

    setdocs((prev) => {
      let newValues = [...prev];
      if (newValues.length > 0) {
        newValues[index][name] = file;
      }
      return newValues;
    });
    setIsLoading(false);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    let projectFormdata = new FormData();
    Object.keys(data.projectDetail).map((key) => {
      projectFormdata.append(key, data.projectDetail[key]);
    });
    try {
      const projectResponse = await api.crud(
        "POST",
        "project/myproject",
        projectFormdata,
        true
      );
      if (projectResponse.status === 201) {
        const project_Id = projectResponse.id;
        setProjectId(project_Id);
        const speciesRequests = species.map((type) =>
          api.crud("POST", "project/species", {
            project: project_Id,
            plant: type.plant,
            percentage: type.percentage,
          })
        );
        await Promise.all(speciesRequests);
        const sendDoc = async (docFormData) => {
          await api.crud("POST", "project/docs/create", docFormData, true);
        };
        docs.forEach((doc, index) => {
          const docFormData = new FormData();
          docFormData.append(`file`, doc.file);
          docFormData.append(`name`, doc.name);
          docFormData.append("project", project_Id);
          sendDoc(docFormData);
        });
      }
    } catch (err) {
      if (err === 401) setIsLoggedIn(false);
      console.log(err);
    }
    setIsLoading(false);
  };

  const validateSubmit = (e) => {
    e.preventDefault();
    var speciesSum = 0;
    for (let i in species) {
      speciesSum += parseInt(species[i].percentage);
    }

    if (speciesSum == 100) {
      handleSubmit();
    } else {
      setError("Species percentage sum should be 100");
    }
  };

  projectId && submit(projectId);

  if (!isLoggedIn) return <AuthPopup close={() => setIsLoggedIn(true)} />;
  if (isLoading) return <Loading />;

  return (
    <div
      style={{
        width: "90%",
        padding: "0 var(--padding-main)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "0 auto",
      }}
    >
      <form
        style={{
          width: "100%",
          maxWidth: "var(--max-width-form)",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-light)",
        }}
        id={"formId"}
        onSubmit={validateSubmit}
      >
        <div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontWeight: "600",
              color: "var(--heading-color)",
            }}
          >
            Project Species
            <p
              style={{
                border: "1px solid #E6E6E6",
                margin: "var(--padding-light) 0 var(--padding-large)",
              }}
            />
          </div>
          {species.map((type, index) => (
            <div
              key={"species-" + index}
              style={{
                width: "100%",
                maxWidth: "var(--max-width-form)",
                margin: "auto",
                display: "flex",
                gap: "var(--padding-light)",
              }}
            >
              <div style={{ display: "flex", width: "90%", gap: "20px" }}>
                <Input
                  inputData={{
                    placeholder: "Species",
                    type: "text",
                    required: true,
                    value: type["plant"],
                    onChange: (e) =>
                      changeValue("plant", e.target.value, index),
                    maxLength: 50,
                  }}
                />
                <Input
                  inputData={{
                    placeholder: "Percentage",
                    type: "number",
                    required: true,
                    value: type["percentage"],
                    onChange: (e) =>
                      changeValue("percentage", e.target.value, index),
                    maxLength: 50,
                  }}
                />
              </div>
              <div style={{ display: "flex", width: "10%" }}>
                {index != 0 && (
                  <button
                    onClick={() => {
                      setSpecies(
                        species.filter((item, itemIndex) => {
                          return itemIndex != index;
                        })
                      );
                    }}
                    style={{
                      color: "#D11A2A",
                      background: "white",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      border: "2px solid #D11A2A",
                      borderRadius: "5px",
                      padding: "5px",
                      justifyContent: "space-around",
                      marginTop: "4px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                      className="responsiveDeleteButton"
                    >
                      <p>Delete</p>
                      <GrLinkNext />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                      className="responsiveDeleteIcon"
                    >
                      <Delete />
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
          {error ? (
            <p style={{ color: "red", fontSize: "small", marginTop: "-15px" }}>
              {error}
            </p>
          ) : (
            ""
          )}
          <div
            className="secondarybutton"
            style={{
              width: "fit-content",
              margin: "auto",
              display: "flex",
              gap: "var(--padding-light)",
            }}
          >
            <button
              onClick={() => {
                setSpecies((prev) => {
                  let newvalues = [...prev];
                  newvalues.push({ plant: "", percentage: "" });
                  return newvalues;
                });
              }}
              style={{
                padding: "var(--padding-light)",
                width: "var(--project-button)",
                borderRadius: "5px",
                marginBottom: "var(--padding-large)",

                border: "2px solid #4BB543",
                color: "#4BB543",
                background: "white",
              }}
            >
              Add a Species
            </button>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontWeight: "600",
              color: "var(--heading-color)",
            }}
          >
            Project Documents (if any)
            <p
              style={{
                border: "1px solid #E6E6E6",
                margin: "var(--padding-light) 0 var(--padding-large)",
              }}
            />
          </div>
          {docs.map((type, index) => (
            <div
              key={"docs-" + index}
              style={{
                width: "100%",
                maxWidth: "var(--max-width-form)",
                margin: "auto",
                display: "flex",
                gap: "var(--padding-light)",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", width: "90%", gap: "20px" }}>
                <Input
                  inputData={{
                    type: "text",
                    placeholder: "Document name",
                    value: type["name"],
                    onChange: (e) => uploadDoc(index, "name", e.target.value),
                    maxLength: 100,
                  }}
                />
                <Input
                  inputData={{
                    type: "file",
                    value: type["file"],
                    onChange: (e) =>
                      uploadDoc(index, "file", e.target.files[0]),
                    maxLength: 100,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "10%",
                  gap: "20px",
                  marginTop: "-20px",
                }}
              >
                <div
                  className="secondarybutton"
                  style={{
                    width: "fit-content",
                    margin: "auto",
                    display: "flex",

                    width: "80%",
                    gap: "var(--padding-light)",
                  }}
                >
                  {index != 0 && (
                    <button
                      onClick={() => {
                        setdocs(
                          docs.filter((item, itemIndex) => {
                            return itemIndex != index;
                          })
                        );
                      }}
                      style={{
                        color: "#D11A2A",
                        background: "white",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        border: "2px solid #D11A2A",
                        padding: "5px",
                        borderRadius: "5px",
                        justifyContent: "center",
                        marginTop: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                        className="responsiveDeleteButton"
                      >
                        <p>Delete</p>
                        <GrLinkNext />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                        className="responsiveDeleteIcon"
                      >
                        <Delete />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div
            className="secondarybutton"
            style={{
              width: "fit-content",
              margin: "auto",
              display: "flex",
              gap: "var(--padding-light)",
            }}
          >
            <button
              type="button"
              onClick={() => {
                setdocs((prev) => {
                  let newvalues = [...prev];
                  newvalues.push({ file: null });
                  return newvalues;
                });
              }}
              style={{
                padding: "var(--padding-light)",
                width: "var(--project-button)",
                borderRadius: "5px",

                border: "2px solid #4BB543",
                color: "#4BB543",
                background: "white",
              }}
            >
              Add a Document
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "var(--padding-large)" }}>
          <button
            onClick={backStep}
            style={{
              padding: "var(--padding-light)",

              width: "var(--project-button-small)",
              borderRadius: "5px",
              marginTop: "var(--padding-large)",
              marginBottom: "100px",
              border: "2px solid #B6B6B6",
              color: "#525252",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <GrLinkPrevious />
              <p>Back</p>
            </div>
          </button>

          <button
            type="submit"
            style={{
              padding: "var(--padding-light)",
              background: "#354A12",
              width: "var(--project-button-small)",
              borderRadius: "5px",
              marginTop: "var(--padding-large)",
              marginBottom: "100px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p>Next</p>
              <GrLinkNext />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectData;
