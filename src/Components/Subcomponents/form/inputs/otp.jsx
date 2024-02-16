import { useEffect, useState } from "react";
import "./input.css";

const Otp = ({ length, value, setValue }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let inputArray = [];
  for (let i = 0; i < length; i++) {
    inputArray.push(0);
  }

  useEffect(() => {
    let otpinput = document.getElementById(`otp-${currentIndex}`);
    if (otpinput) otpinput.focus();
  }, [currentIndex]);

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      if (value.length === 0) return;
      let newvalue = parseInt(value.toString().slice(0, -1));
      if (isNaN(newvalue)) {
        setValue("");
      } else {
        setValue(newvalue);
      }
      setCurrentIndex((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
    }
  };

  const handleChange = (e) => {
    const inputvalue = e.target.value.toString()[0];
    console.log(inputvalue);
    console.log(value);
    if (value.toString().length >= length) {
      console.log("here");
      return;
    }
    let newvalue = value.toString() + inputvalue;
    setValue(parseInt(newvalue));
    setCurrentIndex((prev) => {
      if (prev === length - 1) return prev;
      return prev + 1;
    });
  };

  return (
    <div className="otpcontainer">
      {inputArray.map((_, index) => (
        <input
          type="number"
          className="otpinputfield"
          min="0"
          max="9"
          value={value ? parseInt(value.toString()[index]) : ""}
          onChange={(e) => handleChange(e, index)}
          onFocus={() => {
            let otpinput = document.getElementById(`otp-${currentIndex}`);
            if (otpinput) otpinput.focus();
          }}
          key={index}
          id={`otp-${index}`}
          onKeyDown={handleKeyDown}
          required
        />
      ))}
      {/* <button onClick={() => console.log(currentIndex)}>Current Index</button> */}
    </div>
  );
};

export default Otp;
