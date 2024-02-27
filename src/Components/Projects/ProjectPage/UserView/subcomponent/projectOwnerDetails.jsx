import ProjectPageButton from "./projectButton";

const ProjectOwnerDetails = ({isOwnerView}) =>{
    return(
        <div className="projectOwnerDetailsContainer">
            <div>
                <p style={{
                    fontFamily:"DM Serif Display",
                    fontSize:"2rem",
                    textAlign:"center",
                    fontWeight:"700"}}
                    >
                        Project Owner Details
                    </p>
            </div>
            <div className="projectOwnerDetails">
                <div className="orgDetailsContainer">
                    <p style={{
                    fontFamily:"Inter",
                    fontSize:"1.3rem",
                    textAlign:"center",
                    fontWeight:"500"}}
                    >
                        Organization details
                    </p>
                    <div className="orgDetailsBox">
                        <div className="orgLabelBox">
                            <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Name
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                                Beyond Imagination Technologies Pvt. Ltd
                            </p>
                            </div>
                           <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Description
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                                We ideate, develop, deploy and maintain blockchain technology solutions for start-ups, enterprises, and government.
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Address
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                                B-8 First Floor, Multan Nagar Paschim Vihar Delhi, North West DL-110063
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Country
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                               India
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Area Code
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                               110061
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Website
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                               www.beimagine.tech
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                               Reg ID
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                               878678687
                            </p>
                            </div>

                            <div className="socialMediaIconsBox">
                                <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                               Socials 
                            </p>
                             <div style={{display:"flex",gap:"1rem"}}>
                                <img src="./Component 6.png" alt="insta"/>
                                <img src="./Component 7.png" alt="twitter"/>
                                <img src="./Component 8.png" alt="linkedin"/>
                            </div>
                            </div>
                                
                                
                            </div>


                        </div>

                    </div>

                </div>
                <div className="repDetailsContainer">
                    <p style={{
                    fontFamily:"Inter",
                    fontSize:"1.3rem",
                    textAlign:"center",
                    fontWeight:"500"}}
                    >
                        Representative details
                    </p>
                    <div className="repDetailsBox">
                        <div className="repProfile">
                            <div style={{
                                width:"50%"
                            }}>
                            <img src="./profilePics.png" alt="profile" style={{
                                width:"100%",
                                height:"100%"

                            }} />
                            </div>
                            <div style={{
                                width:"50%"
                            }}>
                            <p style={{
                                fontFamily:"Inter",
                                fontSize:"1.3rem",
                            }}>Navraj Sharma</p>
                            </div>

                        </div>
                           <div className="repLabelBox">
                            <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Email
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                                hell@beimagine.tech
                            </p>
                            </div>
                           <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Phone
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                                878972913
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Designation
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                                Some Text Here
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                NIN
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                               783246724697
                            </p>
                            </div>
                             <div style={{display:"flex"}}>
                            <p style={{
                                width:"50%",
                                fontSize:"1rem",
                            }}>
                                Wallet
                            </p>
                              <p style={{
                                width:"50%",
                                fontSize:"1rem",
                                color: "rgba(0, 0, 0, 0.7)",
                            }}>
                               110061
                            </p>
                            </div>
                            

                        </div>
                    </div>

                </div>

            </div>
             {
                    isOwnerView && 
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        marginTop:"1rem"
                    }}>
                    <ProjectPageButton 
                    text = "Edit Owner Details"
                    icon={"./EditIcon.png"}
                    />
                    </div>
                }

        </div>
    )
}
export default ProjectOwnerDetails;