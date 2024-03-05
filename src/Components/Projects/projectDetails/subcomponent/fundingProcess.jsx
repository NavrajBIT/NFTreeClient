const FundingProcess = ({ details }) => {
  const fundingProgressPercentage = (function () {
    let percentage = 0;
    try {
      percentage =
        (details?.project?.funding?.raised / details?.project?.funding?.total) *
        100;
    } catch {
      percentage = 0;
    }
    return percentage;
  })();
  return (
    <div style={{ padding: "1rem" }}>
      <div>
        <p
          style={{
            fontSize: "1.4rem",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Funding Progress ({fundingProgressPercentage}%)
        </p>
      </div>
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap-reverse",
          width: "80%",
        }}
        className="fundingBar"
      >
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "500",
            textAlign: "center",
            flex: "40%",
          }}
        >
          {" "}
          (${details?.project?.funding?.raised} 0f $
          {details?.project?.funding?.total})
        </p>
        <div
          style={{
            flex: "60%",
            height: "22px",
            borderRadius: "20px",
            border: "1px solid black",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: `${fundingProgressPercentage}%`,
              height: "100%",
              backgroundColor: "green",
              borderRadius: "22px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FundingProcess;
