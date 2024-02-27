import ProjectDesc from "./subcomponent/projectDesc";
import ProjectDetails from "./subcomponent/projectDetails";
import FundingProcess from "./subcomponent/fundingProcess";
import PlantImages from "./subcomponent/plantImages";
import ProjectDocument from "./subcomponent/projectDocument";
import ProjectGallery from "./subcomponent/projectGallery";
import ProjectOwnerDetails from "./subcomponent/projectOwnerDetails";
const UserView = ({isOwnerView})=>{
    // const isOwnerView = true;
    return(
        <div className="userViewContainer"
        style={{
        backgroundImage: "linear-gradient(to bottom right, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex:"1",
      }}
    >
        <div style={{
            width:" 100%",
            background: "linear-gradient(to right, #FFFFFF, #EBFFC8)",
            borderRadius:"20px",
            marginTop:"5rem",
            zIndex:"1",
        }}>
        <ProjectDesc isOwnerView={isOwnerView}/>
        <ProjectDetails isOwnerView={isOwnerView}/>
        <FundingProcess isOwnerView={isOwnerView}/>
        <PlantImages isOwnerView={isOwnerView}/>
        <ProjectDocument isOwnerView={isOwnerView}/>
        <ProjectGallery isOwnerView={isOwnerView}/>
        <ProjectOwnerDetails isOwnerView={isOwnerView}/>

        </div>
          
        </div>
    )
}

export default UserView;