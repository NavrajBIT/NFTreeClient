import "./userView.css";
import PlantImageBox from "./plantImageBox";
import ProjectPageButton from "./projectButton";
const PlantImages = ({isOwnerView}) => {
    return (
        <div className="btnsAndPlantImageContainer">
            <div className="buttonContainer" >
                <ProjectPageButton 
                text={"Share"}
                icon={"./material-symbols_share.png"}
                />
                <ProjectPageButton 
                text={" View Report"}
                icon={"./ViewReportIcon.png"}
                />
                <ProjectPageButton 
                text={"Invest"}
                icon={"./Group.png"}
                />
            </div>
               {
                    isOwnerView&&
                    <div style={{
                        marginTop:"1rem",
                        gap:"2rem",
                        display:"flex"
                    }}>
                    <ProjectPageButton
                    text={"Edit Image"}
                    icon={"./EditImage.png"}
                    />
                    <ProjectPageButton
                    text={"Send Report"}
                    icon={"./SendIcon.png"}
                    />
                    
                    
                    </div>
                }

            <div className="imagesContainer">
                <div>
                    <p style={{
                        fontSize:"1.8rem",
                        fontWeight:"700",   
                        textAlign:"center",
                        fontFamily:"DM Serif Display",
                    }}>Plant Images</p>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    marginTop:"5rem",
                }}>
                     <PlantImageBox />
                     <PlantImageBox />
                     <PlantImageBox />
                    {/* <PlantImageBox /> */}
                </div>


            </div>

            {/* <ProjectDocument /> */}
         



         </div>
           
                 
    )
}

export default PlantImages;