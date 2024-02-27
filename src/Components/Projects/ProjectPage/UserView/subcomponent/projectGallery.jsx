import "./userView.css";
import PlantImageBox from "./plantImageBox";
const ProjectGallery = ()=>{
    return(
        <div className="projectGalleryContainer">
            <div >
                <p className="projectGalleryTitle" >
                    Project Gallery
                </p>
            </div>

            <div style={{
                width:"100%",
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
    )
}

export default ProjectGallery;