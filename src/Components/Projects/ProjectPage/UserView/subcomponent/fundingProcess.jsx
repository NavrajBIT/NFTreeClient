const FundingProcess = () => {
    return(
        <div className="fundingProcessContainer">
            <div>
                <p style={{
                    fontSize:"1.4rem",
                    fontWeight:"500",
                    textAlign:"center",
                }}>Funding Progress (33.33%)</p>
            </div>
            <div style={{
                marginTop:"2rem",
                display:"flex",
                justifyContent:"space-around",
            }}>
                <p style={{
                    fontSize:"1rem",
                    fontWeight:"500",
                    textAlign:"center",
                }}> (2,00,000$ 0f 6,00,000$)</p>
                <div style={{
                    width:"50%",
                    height:"22px",
                    borderRadius:"20px",
                    border:"1px solid black",
                    backgroundColor:"white",
                }}>
                    <div style={{
                        width:"33.33%",
                        height:"100%",
                        backgroundColor:"green",
                        borderRadius:"22px",
                    }}></div>

                </div>
            </div>
        </div>
    )
}

export default FundingProcess;