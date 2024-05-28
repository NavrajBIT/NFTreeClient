import React from "react";

const ProjectChainDetails = ({ details }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 className="projectHeading">Blockchain Details</h1>
      <div className="blockchainDetails" >
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              wordWrap: "break-word",
            }}
          >
            <div style={{fontWeight:"600"}}>Tx Signature : </div>
            <div style={{fontWeight:"600"}}>
              Program Account :
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              wordWrap: "break-word",
            }}
          >
            <div> {details?.project?.blockchain?.signature}</div>
            <div>
              {details?.project?.blockchain?.program_account}
            </div>
          </div>
        </div>
        <button
          className="progressBtn"
          onClick={() => {
            window.open(
              `https://explorer.solana.com/tx/${details?.project?.blockchain?.signature}?cluster=devnet`
            );
          }}
          style={{
            margin: "auto",
            padding: "1.3% 8%"
          }}
        >
          Explorer
        </button>
      </div>
    </div>
  );
};

export default ProjectChainDetails;
