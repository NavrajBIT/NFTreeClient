import ProjectsCard from "./projectCard";
const MyNFTs = () =>{
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
                    }}>My NFTs</p>
                </div>
                <div>
            
                </div>
                
            </div>

            <div style={{
                marginTop:"2rem",
                padding:"1rem"
            }}>
                <ProjectsCard isNFTs={true}/>
            </div>


        </div>
    )
}

export default MyNFTs;