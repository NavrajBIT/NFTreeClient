import ProjectsCard from "./projectCard"
const MyContribution = () =>{
    return(
        <div style={{
            backgroundColor:"#D2E0D6",
            width:"100%",
            padding:"2rem"
        }}>
            <div style={{
                display:"flex",
                justifyContent:"space-between"
            }}>
                <div>
                    <p style={{
                        fontSize:"1.6rem",
                        fontWeight:"600"
                    }}>My Contributions</p>
                    <p style={{
                        marginTop:"0.5rem"
                    }}>Contributions made by you</p>
                </div>
                <div>
                    <button className="profileButtons">
                        <img src="./VectorPlus.png" alt="Plus" />
                        <span style={{
                        
                        }}>Make Contribution</span>
                    </button>
                </div>
                
            </div>

            <div style={{
                marginTop:"2rem",
                padding:"1rem"
            }}>
               <ProjectsCard isContribution={true}/>

            </div>


        </div>
    )
}

export default MyContribution