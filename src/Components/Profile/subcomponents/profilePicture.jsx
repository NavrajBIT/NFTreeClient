import "./profile.css"
const ProfilePicture = () =>{
    return(
        <div className="profileMainDiv" >

            <div className="profileSubContainer">
               <div className="coverPicContainer">
                <div className="profilePicContainer">
                        <img src="./teacherImage.png" alt="profile pic" style={{
                            borderRadius:"50%",
                            width:"100%",
                            height:"100%",
                            objectFit:"cover",
                            boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.75)"
                        }}/>
                        <p style={{
                            marginTop:"10px",
                            fontSize:"22px",
                            textAlign:"center",
                            fontWeight:"bold",
                        }}> Navraj sharma</p>
                        <p style={{
                            fontSize:"17px",
                            textAlign:"center",
                        }}>Developer</p>
                        <p style={{
                           fontSize:"13px",
                            textAlign:"center",
                        }}>navrajsharama@gmail.com</p>
                    </div>

               </div>
               <div className="personalDetailsMainBox" >

                    <div className="organizationDetails">
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}> 
                        <p style={{
                            fontSize:"1.2rem",
                            fontWeight:"700"
                        }}>Organization</p>
                            <img src="Edit2.png" alt="Edit" style={{
                                width:"60px",
                                height:"60px"
                            }}/>
                        </div>

                        <div style={{
                            marginTop:"1rem"
                        }}>
                        <p style={{
                            fontWeight:"600",

                        }}>Beyond Imagination Technologies Pvt.Ltd</p>
                        <p style={{
                            marginTop:"0.5rem"
                        }}>We ideate, develop, deploy and maintain blockchain technology solutions for start-ups, enterprise, and government.</p>
                        <p style={{
                            marginTop:"0.5rem",
                        }}><span style={{
                              fontWeight:"600"
                        }}>Website:</span>www.beimagine.tech</p>
                        <p style={{
                            marginTop:"0.5rem",
                            
                        }}><span style={{
                              fontWeight:"600"
                        }}> Address:</span> <span>B-8 First Floor, Multhan Nagar Paschin Vihar Delhi, North West DL-110063</span></p>
                        <p style={{
                            marginTop:"0.5rem"
                        }}> <span style={{
                              fontWeight:"600"
                        }}>Country:</span> <span>India</span></p>
                        <p style={{
                            marginTop:"0.5rem"
                        }}><span  style={{
                              fontWeight:"600"
                        }}>Area Code:</span> <span>110063</span></p>
                        <p style={{
                            marginTop:"0.5rem"
                        }}><span  style={{
                              fontWeight:"600"
                        }}>Reg. Id:</span> <span>123456</span></p>
                        </div>

                    </div>
                    <div className="personalDetails">
                        <div style={{
                            display:"flex",
                            justifyContent:"space-between"
                        }}>
                        <p style={{
                            fontSize:"1.2rem",
                            fontWeight:"700"
                        }}>Profile Info</p>
                        <img src="Edit2.png" alt="Edit" style={{
                                width:"60px",
                                height:"60px"
                            }}/>
                        </div>
                        <div style={{
                            marginTop:"1rem"
                        }}>
                        <p  style={{
                            marginTop:"0.5rem"
                        }}> <span style={{
                              fontWeight:"600"
                        }}>Ph no:</span>  <span>98824080807</span></p>
                        <p  style={{
                            marginTop:"0.5rem"
                        }}><span style={{
                              fontWeight:"600"
                        }}>National Identification Number(NIN):</span> <span>123456</span></p>
                        <p  style={{
                            marginTop:"0.5rem"
                        }}><span style={{
                              fontWeight:"600"
                        }}> Proof of NIN:</span> <span>uploaded File</span></p>
                        <p  style={{
                            marginTop:"0.5rem"
                        }}><span style={{
                              fontWeight:"600"
                        }}>Signed Note from Organization:</span> <span>upload File</span></p>
                        </div>

                </div>


                   
               </div>

            </div>


        </div>
    )
}

export default ProfilePicture;