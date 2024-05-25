import React from "react";

const ProjectChainDetails = ({ details }) => {
  return (
    <div style={{ padding: "20px 90px", background: "green", color: "white" }}>
      {/* <button onClick={() => console.log(details?.project)}>Click</button> */}
      <div style={{ fontSize: "2rem" }}>Blockchain Details</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          wordWrap: "break-word",
        }}
      >
        <div>Tx Signature : {details?.project?.blockchain?.signature}</div>
        <div>
          Program Account : {details?.project?.blockchain?.program_account}
        </div>
        <button
          onClick={() => {
            window.open(
              `https://explorer.solana.com/tx/${details?.project?.blockchain?.signature}?cluster=devnet`
            );
          }}
          style={{
            width: "fit-content",
            padding: "10px",
            background: "white",
            borderRadius: "10px",
            color: "green",
          }}
        >
          Explorer
        </button>
      </div>
    </div>
  );
};

export default ProjectChainDetails;
