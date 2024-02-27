import "./userView.css";
import LabelValueBox from "./labelValueBox";
import ProjectPageButton from "./projectButton";
const ProjectDetails = ({isOwnerView}) =>{
    return(
        <div className="projectDetailsContainer">
            <div>
                <p style={{
                    fontFamily:"DM Serif Display",
                    fontSize:"2rem",
                    textAlign:"center",
                    fontWeight:"700"

                }}>
                    Project Details
                </p>
            </div>
            <div className="projectDetailsMainBox" >
                <div className="projectDetailsSubBoxFirst" >
                   <div className="projectDetailsSubBoxFirstSub" >
                    <LabelValueBox 
                    label="Project Type"
                    value="Investment"
                    />
                    <LabelValueBox
                    label="Total Plantation Area"
                    value={"10,000"}
                    />
                    <LabelValueBox
                    label="Project Age"
                    value={"10"}
                    />
                    <LabelValueBox
                    label="Donation CostPer Plant ($)"
                    value={"10"}
                    />
                    <LabelValueBox
                    label="Total Number Of Plants Planned"
                    value={"10000"}
                    />

                   </div>
                </div>
                <div className="projectDetailsSubBoxSecond">
                    <div className="projectDetailsSubBoxSecondSub" >
                    <LabelValueBox 
                    label="Full Address"
                    value="4517 Washington Ave. Manchester, Kentucky 39495, United State"
                    />
                    <LabelValueBox
                    label="State"
                    value="Manchester"
                    />
                    <LabelValueBox
                    label="Country"
                    value="United State Of America"
                    />
                    <LabelValueBox
                    label="Area Pin Code"
                    value="39495"
                    />

                   </div>
           

                </div>

            </div>
            <div className="projectDetails2ndMainBox" >
                 <div style={{
                    width:"100%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-around"
                   }}>
                    <div style={{display:"flex"}}>
                        <p style={{
                            fontWeight:"600",
                            fontSize:"1.1rem",
                        }}>Type of Plants</p>
                        {/* <div style={{
                        width:"100%",
                        display:"flex",
                    }}>
                    <div style={{
                    width:"50%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-around",
                
                    
                   }}>
                    <p style={{
                        fontWeight:"300",
                        fontSize:"1rem"
                    }}>Apple</p>
                    <p style={{
                        fontWeight:"300",
                        fontSize:"1rem"
                    }}>Mango </p>
                    <p style={{
                        fontWeight:"300",
                        fontSize:"1rem"
                    }}>Banana</p>
                  
                    

                   </div>
                   <div style={{
                    width:"50%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-around"
                    
                   }}>
                    <p 
                    style={{
                        fontWeight:"300",
                        fontSize:"1rem"
                    }}>40%</p>
                    <p style={{
                        fontWeight:"300",
                        fontSize:"1rem"
                    }}
                    >30%</p>
                    <p style={{
                        fontWeight:"300",
                        fontSize:"1rem"
                    }}>40%</p>
                   </div>
                        

                        </div> */}

                    </div>
                    <LabelValueBox
                    label={"Project Coordinates"}
                    value={"346.34, 345.767, 2134.42543, 65.2423"}
                    />
                     <LabelValueBox
                    label={"Per Tree Investment (aprox)"}
                    value={"6"}
                    />
                    <LabelValueBox 
                    label={"Revenue Distribution Details"}
                    value={"Credits will be shared"}
                    />
                    <LabelValueBox 
                    label={"Upcoming Revenue Dirtribution Date"}
                    value={"2024-12-31"}
                    />
                    <LabelValueBox 
                    label={"Expected Approximate ROI"}
                    value={"68%"}
                    />
                    

                   </div>


            </div>
              {
                isOwnerView&& 
                <div style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                <ProjectPageButton
                text="Edit Report"
                icon={"./EditIcon.png"}
                />
                </div>
                }

        </div>
    )
}

export default ProjectDetails;