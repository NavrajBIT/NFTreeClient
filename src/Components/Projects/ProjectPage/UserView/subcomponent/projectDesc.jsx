import "./userView.css";
import ProjectPageButton from "./projectButton";
const ProjectDesc = ({isOwnerView}) => {
    return (
        <div className="projectDescContainer" style={{
        
        }}>
            <div style={{
                width:"400px",
                height:"60px",
                backgroundColor:"#BFCCA6",
                borderRadius:"20px",
                boxShadow: "3px 4px 30px 0px",
                padding:"1rem",
            }}>
                <p style={{
                    fontSize:"1.7rem",
                    color:"black",
                    textAlign:"center",
                    fontFamily:"DM Serif Display",
                }}>Investment Project Sample</p>
            </div>

            <div style={{
                width:"92%",
                minHeight:"200px",
                backgroundColor:"#BFCCA6",
                borderRadius:"20px",
                boxShadow: "3px 4px 30px 0px",
                padding:"1rem",
            }}>
                <p style={{
                    fontSize:"1.2rem",
                    fontFamily:"Inter",

                }}>
                    <b>Description:</b>
                    “Roots of Hope” is a transformative tree plantation initiating aiming to combat deforestation and climate change. Partnering with local communities, we aim to plant 10,000 native trees in degraded areas over the next year. Through community engagement and education, we foster sustainable land management practices, enhancing biodiversity and securing livelihoods. 
                </p>
            </div>

          



           
        </div>
    )
}

export default ProjectDesc;

