import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createTransaction } from "../../../../api/projectApi";
import "./ContributeProject.css";
import { useParams } from "react-router-dom";

const ContributeProject = () => {
  const params = useParams();
  const id = params.projectIs;
  // const { id, donation } = state.state;

  const [formData, setFormData] = useState({
    amount: 0,
    trees_count: null,
    email: "",
    name: "",
    project: id,
    user: sessionStorage.getItem("id"),
  });

  useEffect(() => {
    const delay = 1000;

    const timeoutId = setTimeout(() => {
      const newTotalAmount = calculateTotalAmount(formData.trees_count);
      setFormData((prevFormData) => ({
        ...prevFormData,
        amount: newTotalAmount,
      }));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [formData.trees_count]);

  const calculateTotalAmount = (value) => {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? 0 : donation * numericValue;
  };

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    createTransaction(formData);
  };

  return (
    <>
      <div className="form-container contributeProjectContainer">
        <div className="form-box form-button">
          <h1 className="formHead">Contribute</h1>
          <div className="form-input">
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^a-zA-Z ]/g, ""))
              }
              placeholder="Name"
            />
            <input
              type="text"
              name="trees_count"
              onChange={handleInputChange}
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9 ]/g, ""))
              }
              placeholder="Number of Plants"
            />
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="bitWallet"
              onChange={handleInputChange}
              placeholder="Bit Wallet Address"
            />

            <p className="amount">Total = ${formData.amount}/-</p>

            <button className="submit-button" onClick={handleSubmit}>
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributeProject;
