import Input from "./input";
import { useState } from "react";

const Myform = ({
  heading,
  formdata,
  formButton,
  handleSubmit,
  close,
  error,
  children,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    let isValid = true;
    formdata.map((inputGroup) => {
      inputGroup.map((inputData) => {
        if (inputData.isHalf) {
          inputData.isHalf.map((realInputData) => {
            if (!checkEmptyValue(realInputData)) {
              isValid = false;
            }
          });
        } else {
          if (!checkEmptyValue(inputData)) {
            isValid = false;
          }
        }
      });
    });
    if (isValid) {
      handleSubmit();
    }
  };

  const checkEmptyValue = (inputData) => {
    let isValid = true;
    if (inputData.required) {
      if (inputData.value === "" || !inputData.value) {
        isValid = false;
      }
    }

    return isValid;
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        background: "white",
        padding: "var(--padding-main)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
        borderRadius: "var(--border-radius-light)",
        boxShadow: "7px 7px 10px 0px",
      }}
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-light)",
          borderRadius: "var(--border-radius-light)",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--green-80)",
          }}
        >
          {heading}
        </div>
        <hr />
        {formdata.map((inputGroup, index) => {
          return (
            <div
              key={"input-group-" + index}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "var(--padding-light)",
              }}
            >
              {inputGroup.map((inputData, i) => {
                if (inputData.isHalf) {
                  return (
                    <div
                      style={{
                        width: "100%",
                        display: "grid",
                        gap: "var(--padding-light)",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                      key={"input-field-" + index + "-" + i}
                    >
                      {inputData.isHalf.map((inputdata2, index3) => {
                        return (
                          <Input
                            key={
                              "input-field-" + index + "-" + i + "-" + index3
                            }
                            inputData={inputdata2}
                            error={isSubmitted && !checkEmptyValue(inputdata2)}
                          />
                        );
                      })}
                    </div>
                  );
                }

                return (
                  <div
                    style={{ width: "100%" }}
                    key={"input-field-" + index + "-" + i}
                  >
                    <Input
                      inputData={inputData}
                      error={isSubmitted && !checkEmptyValue(inputData)}
                    />
                  </div>
                );
              })}

              {error && (
                <span
                  id="errMsg"
                  style={{ color: "var(--error)", fontSize: "small" }}
                >
                  {error}
                </span>
              )}
            </div>
          );
        })}
        <div
          style={
            close && {
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--padding-light)",
            }
          }
        >
          {close && (
            <div className="primarybutton">
              <button onClick={close}>Cancel</button>
            </div>
          )}
          <div className="primarybutton">
            <button type="submit" onClick={handleFormSubmit}>
              {formButton}
            </button>
          </div>
        </div>
      </form>
      {children}
    </div>
  );
};

export default Myform;
