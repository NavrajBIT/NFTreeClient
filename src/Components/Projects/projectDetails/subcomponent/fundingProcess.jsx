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
    <div className="fundingProcessContainer">
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
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {" "}
          ({details?.project?.funding?.raised}$ 0f{" "}
          {details?.project?.funding?.total}$)
        </p>
        <div
          style={{
            width: "50%",
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
