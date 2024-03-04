import "./profile.css"

const ProjectsCard = ({isProjectCard,isNFTs,isContribution}) => {
    return (
         <div className="projectCard">
                    <img src="./Rectangle 43.png" alt="" style={{
                        width:"100%",
                        height:"185px",
                        borderRadius:"10px",
                    }}/>
                    <p style={{
                        fontSize:"1.5rem",
                        fontWeight:"700",
                        marginTop:"1rem"
                    }}>
                        {
                            isProjectCard&&" Monitoring Project "

                        }
                    </p>
                    <p style={{
                        fontSize:"1rem",
                        fontWeight:"600",
                        marginTop:"1rem",
                        color:"#056060",
                    }}>
                         {
                            isProjectCard&&"Kolkata "

                        }
                        {
                            isNFTs&&"Kolkata "
                        }
                        {
                            isContribution&&"Kolkata "
                        }
                    </p>
                    <p style={{
                        fontSize:"1rem",
                        marginTop:"1rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                    Read More</p>

                   {
                    isProjectCard&&
                    <div style={{
                        marginTop:"1rem",
                        display:"flex",
                        justifyContent:"space-between"
                    }}>
                        <p style={{
                            color:"#056060",
                            fontWeight:"600"
                        }}>Monitoring</p>
                   
                        <img src="./Project Diagram.png" alt="share" style={{
                                width:"40px",
                                height:"40px"
                        }}/>
                      
                    </div>
                    }
                    {
                        isNFTs&&
                        <div style={{
                        marginTop:"1rem",
                        display:"flex",
                        justifyContent:"space-between",
                        flexDirection:"column"
                    }}>
                        <p style={{
                            color:"#056060",
                            fontWeight:"600"
                        }}>Contribution: 10.00$</p>
                        <p style={{
                            color:"#056060",
                            fontWeight:"600"
                        }}>Trees: 2</p>
                      
                    </div>
                    }
                    {
                        isContribution&&
                        <div style={{
                        marginTop:"1rem",
                        display:"flex",
                        justifyContent:"space-between"
                    }}>
                        <p style={{
                            color:"#056060",
                            fontWeight:"600"
                        }}>Contribution: 10.00$</p>
                      
                    </div>
                    }



                </div>
    );
};


export default ProjectsCard;