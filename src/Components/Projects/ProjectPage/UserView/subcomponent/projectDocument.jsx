import ProjectDocumentBox from "./projectDocumentBox";
const ProjectDocument = () => {
    return (
        <div className="projectDocumentContainer">
            {/* <div style={{
                position:"absolute",
                top:"288%",
                zIndex:"22",
                left:"59%",
            }}>
            <img src="Rectangle 22.png" alt="plant Image" style={{
                width:"100px",
                height:"120px"
            }}
            />
            </div> */}
            <div>
                <p style={{
                    fontFamily:"DM Serif Display",
                    fontSize:"2rem",
                    textAlign:"center",
                    color:"white",
                    fontWeight:"700"}}
                    >
                        Project Documents 
                    </p>
            </div>
            <div style={{
                width:"100%",
                display:"flex",
                justifyContent:"space-around",
                marginTop:"3rem",
            }}>
                <ProjectDocumentBox />
                <ProjectDocumentBox />
                <ProjectDocumentBox />
                {/* <ProjectDocumentBox />
                 <ProjectDocumentBox />
                <ProjectDocumentBox /> */}
            </div>
        </div>
    )
}

export default ProjectDocument;