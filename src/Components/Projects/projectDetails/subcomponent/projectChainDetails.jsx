import React from "react";

const ProjectChainDetails = ({ details }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 className="projectHeading">Blockchain Details</h1>
      <div className="blockchainDetails" >
        <div style={{ display: "flex", gap: "30px", flexDirection: "column",width: "100%" }}>
          <div
          className="blockchainText"
          >
            <div className="signiture" style={{whiteSpace:"nowrap"}}>
               <b> Tx Signature :</b>
            </div>
              <div style={{wordBreak:"break-word"}}>
              {details?.project?.blockchain?.signature}
              </div>
          </div>

          <div
          className="blockchainText"
          >
            <div style={{whiteSpace:"nowrap"}}>
            <b> Program Account :</b>
            </div>
            <div style={{wordBreak:"break-word"}}>
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
