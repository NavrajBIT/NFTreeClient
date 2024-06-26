import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../../Subcomponents/form/inputnew";

const Searchbar = ({ usetx }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  let projectOptions = [];

  if (usetx?.selectedProject) {
    projectOptions.push({
      label: usetx.selectedProject.name,
      value: usetx.selectedProject.id,
    });
  }

  usetx?.projects?.map((proj) => {
    if (usetx?.selectedProject) {
      if (proj.id == usetx.selectedProject.id) {
        return;
      }
    }
    projectOptions.push({
      label: proj.name,
      value: proj.id,
    });
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "var(--padding-main)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "500px", position: "relative" }}>
        <input
          type="text"
          className="marketplacesearchbar"
          style={{
            padding: "var(--padding-light)",
            border: isHighlighted ? "2px solid grey" : "none",
            width: "100%",
            outline: "none",
            background: "#F4F4F4",
            position: "relative",
            textIndent: "30px",
            height: "50px",
            // border: "none",
            boxShadow: "-3px 3px 5px 4px #AAAAAA inset",
            fontSize: "20px",
          }}
          onFocus={() => setIsHighlighted(true)}
          onBlur={() => setIsHighlighted(false)}
          onChange={(e) => usetx.setSearchValue(e.target.value)}
          value={usetx.searchValue}
          placeholder="Search Tx Id..."
        />
        <span
          style={{
            position: "absolute",
            left: "10px",
            top: "28%",
            //   transform: "translate(-50%,-50%)",
          }}
        >
          <SearchIcon />
        </span>
      </div>
      <div
        style={{
          marginTop: "12px",
        }}
      >
        <Input
          inputData={{
            label: "",
            type: "select",
            required: false,
            value: (function () {
              let label = "";
              projectOptions.map((type) => {
                if (
                  type.value === usetx.selectedProject ||
                  type.value == usetx?.selectedProject?.id
                ) {
                  label = type.label;
                }
              });
              console.log(label);
              return label;
            })(),

            options: projectOptions,
            select: true,
            onChange: (e) => {
              usetx?.projects?.map((proj) => {
                if (proj.id == e.target.value) {
                  usetx.setSelectedProject(proj);
                }
              });
            },
            maxLength: 50,
          }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
