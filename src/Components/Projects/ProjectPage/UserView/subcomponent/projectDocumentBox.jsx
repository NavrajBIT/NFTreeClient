import "./userView.css"
const ProjectDocumentBox = () =>{
    return(
        <div className="documentBox" >
            
                        <img src="./docsImage.png" alt="plant Image" className="docImage"/>
                        <p style={{
                            marginTop:"1rem",
                            fontSize:"1rem",
                            color:"white",
                            fontWeight:"500",
                            textAlign:"center"
                        }}>
                           Document 
                        </p>

        </div>
    )
}

export default ProjectDocumentBox;