import Input from "./inputnew";
import { useState } from "react";
<<<<<<< HEAD
=======
import { GrLinkPrevious } from "react-icons/gr";
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

const Myform = ({
  heading,
  formdata,
  formButton,
  handleSubmit,
  close,
  error,
  children,
  back,
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
    <div>
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "var(--padding-light)",
          borderRadius: "var(--border-radius-light)",
          padding: "0 var(--padding-large)",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
<<<<<<< HEAD
            fontWeight: "bold",
            color: "var(--green-80)",
=======
            fontWeight: "600",
            color: "var(--heading-color)",
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
          }}
        >
          {heading}
          <p
            style={{
              border: "1px solid #E6E6E6",
              margin: "var(--padding-light) 0 var(--padding-large)",
            }}
          />
        </div>

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
          <div style={{ display: "flex", gap: "var(--padding-large)" }}>
            {back != undefined && (
              <button
                onClick={back}
                style={{
                  padding: "var(--padding-light)",

                  width: "var(--project-button-small)",
                  borderRadius: "5px",
                  marginTop: "var(--padding-large)",
                  marginBottom: "100px",
                  border: "2px solid #B6B6B6",
                  color: "#525252",
                }}
              >
<<<<<<< HEAD
                Back
=======
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <GrLinkPrevious />
                  <p>Back</p>
                </div>
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
              </button>
            )}

            <button
              type="submit"
              onClick={handleFormSubmit}
              style={{
                padding: "var(--padding-light)",
                background: "#354A12",
                width: "var(--project-button-small)",
                borderRadius: "5px",
                marginTop: "var(--padding-large)",
                marginBottom: "100px",
              }}
            >
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
