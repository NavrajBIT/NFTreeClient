import { useState, useEffect } from "react";
import useAPI from "../../../../api/useAPI";
import Input from "../input";
import Auth from "../../../Auth/Auth";
import Loading from "../../loading/loading";

const ProjectData = ({ submit, projectId }) => {
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
    <form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
      }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          fontSize: "1.5rem",
          color: "var(--green-30)",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Project Data
      </div>
      <div>Plant Species:</div>
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
          <Input
            inputData={{
              label: "Species",
              type: "text",
              required: true,
              value: type["plant"],
              onChange: (e) => changeValue("plant", e.target.value, index),
              maxLength: 50,
            }}
          />
          <Input
            inputData={{
              label: "Percentage",
              type: "number",
              required: true,
              value: type["percentage"],
              onChange: (e) => changeValue("percentage", e.target.value, index),
              maxLength: 50,
            }}
          />
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
        >
          +
        </button>
        <button
          onClick={() => {
            setSpecies((prev) => {
              let newvalues = [...prev];
              if (newvalues.length === 1) {
                return newvalues;
              }
              newvalues.pop();
              return newvalues;
            });
          }}
        >
          -
        </button>
      </div>
      <div>Project Document (If any):</div>
      {docs.map((type, index) => (
        <div
          key={"docs-" + index}
          style={{
            width: "100%",
            maxWidth: "var(--max-width-form)",
            margin: "auto",
            display: "flex",
            gap: "var(--padding-light)",
          }}
        >
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
        >
          +
        </button>
        <button
          onClick={() => {
            setdocs((prev) => {
              let newvalues = [...prev];
              if (newvalues.length === 1) {
                return newvalues;
              }
              newvalues.pop();
              return newvalues;
            });
          }}
        >
          -
        </button>
      </div>
      <div
        className="primarybutton"
        style={{
          width: "fit-content",
          margin: "auto",
        }}
      >
        <button type="submit">Next{" >>"}</button>
      </div>
    </form>
  );
};

export default ProjectData;
