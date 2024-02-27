import ProjectsCard from "./projectCard"
const MyProject = () =>{
   
    return(
        <div style={{
            backgroundColor:"#D2E0D6",
            width:"100%",
            padding:"2rem",
            marginTop:"5rem",
            height:"auto"
        }}>
            <div style={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <div>
                    <p style={{
                        fontSize:"1.6rem",
                        fontWeight:"600"
                    }}>Projects</p>
                    <p style={{
                        marginTop:"0.5rem"
                    }}>Projects Created By Me</p>
                </div>
                <div>
                    <button className="profileButtons">
                        <img src="./VectorPlus.png" alt="Plus" />
                        <span style={{
                        
                        }}>Create New Projects</span>
                    </button>
                </div>
                
            </div>

            <div className="projectCardDiv">
                <ProjectsCard isProjectCard={true}/>
                <ProjectsCard isProjectCard={true}/>
                <ProjectsCard isProjectCard={true}/>

            </div>


        </div>
    )
}

export default MyProject