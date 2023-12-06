import useprojects from "./subcomponents/useprojects";

import Searchbar from "./subcomponents/searchbar";

const NewProjectPage = () => {
  const script = useprojects();
  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-main)",
        padding: "var(--padding-main) 0px",
      }}
    >
      <Searchbar script={script} />
      {/* <CreateProjectButton/>
      <ProjectsDisplay/> */}
    </div>
  );
};

export default NewProjectPage;
