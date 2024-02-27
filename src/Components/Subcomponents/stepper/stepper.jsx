import "./stepper.css";

const Stepper = ({ data, step }) => {
  const steps = data.length;
  return (
    <div className={"steppercontainer"}>
      {Array.from({ length: steps }, () => 0).map((_, index) => {
        let isComplete = index < step - 1;
        let isSelected = index === step - 1;
        return (
          <div
            key={"stepper-" + index}
            style={{ width: "150px", textAlign: "center" }}
          >
            <Step
              isComplete={isComplete}
              isSelected={isSelected}
              text={data[index]}
            />
            {index < steps - 1 && <Connector isComplete={isComplete} />}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;

const Step = ({ isComplete, isSelected, text }) => {
  return (
    <div>
      <p
        className="stepperText"
        style={{
          color: isComplete ? "var(--green-80)" : isSelected ? "#6BAA00" : "",
        }}
      >
        {text}
      </p>
      <div
        className="stepperBar"
        style={{
          backgroundColor: isComplete ? "#496A13" : isSelected ? "#6BAA00" : "",
        }}
      ></div>
    </div>
  );
};

const Connector = ({ isComplete }) => {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: isComplete
          ? "2px solid var(--green-50)"
          : "2px solid var(--green-30)",
      }}
    />
  );
};
