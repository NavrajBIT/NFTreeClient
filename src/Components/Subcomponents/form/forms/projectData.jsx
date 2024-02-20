import { useState, useEffect } from "react";
import useAPI from "../../../../api/useAPI";
import Input from "../inputnew";
import Auth from "../../../Auth/Auth";
import Loading from "../../loading/loading";

const ProjectData = ({ submit, projectId, backStep }) => {
  const [species, setSpecies] = useState([{ plant: "", percentage: "" }]);
  const [docs, setdocs] = useState([{ file: null }]);
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const changeValue = (key, value, index) => {
    setSpecies((prev) => {
      let newValues = [...prev];
      newValues[index][key] = value;
      return newValues;
    });
  };

  const uploadDoc = async (index, file) => {
    const fileName = file.name.replace(/\s+/g, "_");
    const newFile = new File([file], fileName, { type: file.type });

    const formdata = new FormData();
    formdata.append("file", newFile);
    formdata.append("project", projectId);
    const endpoint = "project/docs/create";
    setIsLoading(true);
    await api
      .crud("POST", endpoint, formdata, true)
      .then((res) => {
        if (res.status === 201) {
          setdocs((prev) => {
            let newvalues = [...prev];
            newvalues[index]["file"] = fileName;
            return newvalues;
          });
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await Promise.all(
      species.map(async (type) => {
        console.log({
          project: projectId,
          plant: type.plant,
          percentage: type.percentage,
        });
        await api
          .crud("POST", "project/species", {
            project: projectId,
            plant: type.plant,
            percentage: type.percentage,
          })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
    );
    setIsLoading(false);
    submit();
  };

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;
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
        onSubmit={handleSubmit}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--green-80)",
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
            <div style={{ display: "flex", width: "80%", gap: "20px" }}>
              <Input
                inputData={{
                  placeholder: "Species",
                  type: "text",
                  required: true,
                  value: type["plant"],
                  onChange: (e) => changeValue("plant", e.target.value, index),
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
            <div style={{ display: "flex", width: "20%" }}>
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
                    width: "var(--project-button-small)",
                    borderRadius: "5px",
                    border: "2px solid red",
                    color: "red",
                    background: "white",
                    height: "46px",
                  }}
                >
                  Delete
                </button>
              )}
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
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--green-80)",
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
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", width: "80%", gap: "20px" }}>
              <Input
                inputData={{
                  label: "Project Document",
                  type: "file",
                  required: true,
                  value: type["file"],
                  onChange: (e) => uploadDoc(index, e.target.files[0]),
                  maxLength: 100,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                width: "20%",
                gap: "20px",
              }}
            >
              <div
                className="secondarybutton"
                style={{
                  width: "fit-content",
                  margin: "auto",
                  display: "flex",

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
                      width: "var(--project-button-small)",
                      borderRadius: "5px",
                      border: "2px solid red",
                      color: "red",
                      background: "white",
                      height: "46px",
                    }}
                  >
                    Delete
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
            Back
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
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectData;
