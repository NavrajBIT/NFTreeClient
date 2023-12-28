import { useEffect, useState } from "react";
import useAPI from "../../api/useAPI";
import { useNavigate } from "react-router-dom";

const useKyc = () => {
  const api = useAPI();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [kycStatus, setKycStatus] = useState(null);
  const [primaryDetails, setPrimaryDetails] = useState(null);
  const [primaryChange, setPrimaryChange] = useState(false);
  const [emailDetails, setEmailDetails] = useState(null);
  const [emailChange, setEmailChange] = useState(false);
  const [otp, setOtp] = useState("");
  const [organizationDetails, setOrganizationDetails] = useState(null);
  const [organizationChange, setOrganizationChange] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    Object.keys(detailTypes).map((key) => {
      poppulateDetails(key);
    });
  }, [isLoggedIn]);

  const detailTypes = {
    kyc: { endpoint: "user/kyc", setState: setKycStatus, state: kycStatus },
    primary: {
      endpoint: "user/account",
      setState: setPrimaryDetails,
      state: primaryDetails,
    },
    email: {
      endpoint: "user/email",
      setState: setEmailDetails,
      state: emailDetails,
    },
    organization: {
      endpoint: "user/organization",
      setState: setOrganizationDetails,
      state: organizationDetails,
    },
  };

  const handleSubmit = async (detailType) => {
    if (detailType === "primary") {
      if (emailChange) {
        if (primaryChange) {
          await updateDetails(detailType);
        }
        let res = await updateDetails("email");
        if (res) {
          setError("");
          setStep(2);
        }
      } else {
        if (primaryChange) {
          let res = await updateDetails(detailType);
          if (res) {
            setError("");
            setStep(3);
          }
        } else {
          setError("");
          setStep(3);
        }
      }
    }
    if (detailType === "organization") {
      if (organizationChange) {
        let res = await updateDetails(detailType);
        if (res) {
          setError("");
          setStep(4);
        }
      } else {
        setError("");
        setStep(4);
      }
    }
  };

  const updateDetails = async (detailType) => {
    setIsLoading(true);
    let isOk = false;
    await api
      .crud(
        "PUT",
        `${detailTypes[detailType]["endpoint"]}/${detailTypes[detailType]["state"]["id"]}`,
        {
          ...detailTypes[detailType]["state"],
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 299) {
          isOk = true;
          if (detailType !== "email") {
            poppulateDetails(detailType);
          }
        } else {
          setError("Invalid data!");
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
        else {
          setError("invalid Data!");
        }
      });
    setIsLoading(false);
    return isOk;
  };

  const poppulateDetails = async (detailType) => {
    setIsLoading(true);
    await api
      .crud("GET", detailTypes[detailType]["endpoint"])
      .then((res) => {
        console.log(res);
        if (res.status === 200) detailTypes[detailType]["setState"](res[0]);
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const verifyEmail = async () => {
    setIsLoading(true);
    let apidata = { ...emailDetails };
    apidata["otp"] = otp;
    await api
      .crud("PATCH", `user/verify-email/${emailDetails.id}`, apidata)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 299) {
          setError("");
          setStep(3);
        } else {
          setError("Invalid OTP!");
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
        else {
          ("Invalid OTP!");
        }
      });
    setIsLoading(false);
  };

  const primaryFormData = [
    [
      {
        isHalf: [
          {
            label: "First Name",
            type: "text",
            required: true,
            value: primaryDetails?.first_name,
            onChange: (e) => {
              setPrimaryChange(true);
              setPrimaryDetails((prev) => {
                let newDetails = { ...prev, first_name: e.target.value };
                return newDetails;
              });
            },
            maxLength: 50,
          },
          {
            label: "Last Name",
            type: "text",
            required: true,
            value: primaryDetails?.last_name,
            onChange: (e) => {
              setPrimaryChange(true);
              setPrimaryDetails((prev) => {
                let newDetails = { ...prev, last_name: e.target.value };
                return newDetails;
              });
            },
            maxLength: 50,
          },
        ],
      },
      {
        label: "Phone Number",
        type: "text",
        required: false,
        value: primaryDetails?.phone,
        onChange: (e) => {
          setPrimaryChange(true);
          setPrimaryDetails((prev) => {
            let newDetails = { ...prev, phone: e.target.value };
            return newDetails;
          });
        },
        maxLength: 15,
      },
      {
        label: "Email",
        type: "email",
        required: true,
        value: emailDetails?.email,
        onChange: (e) => {
          setEmailChange(true);
          setEmailDetails((prev) => {
            let newDetails = { ...prev, email: e.target.value };
            return newDetails;
          });
        },
        maxLength: 100,
      },
    ],
  ];
  const otpFormData = [
    [
      {
        label: "OTP",
        type: "number",
        required: true,
        value: otp,
        onChange: (e) => {
          setOtp(e.target.value);
        },
        maxLength: 6,
      },
    ],
  ];
  const organizationFormData = [
    [
      {
        label: "Name",
        type: "text",
        required: true,
        value: organizationDetails?.name,
        onChange: (e) => {
          setOrganizationChange(true);
          setOrganizationDetails((prev) => {
            let newDetails = { ...prev, name: e.target.value };
            return newDetails;
          });
        },
        maxLength: 100,
      },
      {
        label: "Description",
        type: "text",
        required: true,
        multiline: true,
        rows: 4,
        value: organizationDetails?.description,
        onChange: (e) => {
          setOrganizationChange(true);
          setOrganizationDetails((prev) => {
            let newDetails = { ...prev, description: e.target.value };
            return newDetails;
          });
        },
        maxLength: 500,
      },
      {
        label: "Website",
        type: "text",
        required: true,
        value: organizationDetails?.website,
        onChange: (e) => {
          setOrganizationChange(true);
          setOrganizationDetails((prev) => {
            let newDetails = { ...prev, website: e.target.value };
            return newDetails;
          });
        },
        maxLength: 100,
      },
      {
        label: "Address",
        type: "text",
        required: true,
        multiline: true,
        rows: 2,
        value: organizationDetails?.address,
        onChange: (e) => {
          setOrganizationChange(true);
          setOrganizationDetails((prev) => {
            let newDetails = { ...prev, address: e.target.value };
            return newDetails;
          });
        },
        maxLength: 500,
      },
      {
        label: "Country",
        type: "text",
        required: true,
        value: organizationDetails?.country,
        onChange: (e) => {
          setOrganizationChange(true);
          setOrganizationDetails((prev) => {
            let newDetails = { ...prev, country: e.target.value };
            return newDetails;
          });
        },
        maxLength: 100,
      },

      {
        label: "Reg. Id",
        type: "text",
        required: true,
        value: organizationDetails?.reg_id,
        onChange: (e) => {
          setOrganizationChange(true);
          setOrganizationDetails((prev) => {
            let newDetails = { ...prev, reg_id: e.target.value };
            return newDetails;
          });
        },
        maxLength: 50,
      },
    ],
  ];

  const walletFormData = [
    [
      {
        label: "Account Id",
        type: "text",
        required: true,
        value: primaryDetails?.wallet,
        onChange: (e) => {
          setPrimaryChange(true);
          setPrimaryDetails((prev) => {
            let newDetails = { ...prev, wallet: e.target.value };
            return newDetails;
          });
        },
        maxLength: 100,
      },
    ],
  ];

  const updateWallet = async () => {
    let detailType = "primary";
    setIsLoading(true);
    let isOk = false;
    await api
      .crud(
        "PUT",
        `${detailTypes[detailType]["endpoint"]}/${detailTypes[detailType]["state"]["id"]}`,
        {
          ...detailTypes[detailType]["state"],
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 299) {
          isOk = true;
          poppulateDetails(detailType);
          applyForKYC();
        } else {
          setError("Invalid data!");
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
        else {
          setError("invalid Data!");
        }
      });
    setIsLoading(false);
    return isOk;
  };

  const applyForKYC = async () => {
    setIsLoading(true);
    await api
      .crud("PUT", `user/kyc/${kycStatus.id}`, { is_applied: true })
      .then((res) => {
        setStep(1);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  return {
    step,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    primaryFormData,
    primaryChange,
    emailChange,
    kycStatus,
    handleSubmit,
    otpFormData,
    primaryDetails,
    emailDetails,
    organizationDetails,
    error,
    verifyEmail,
    organizationFormData,
    organizationChange,
    walletFormData,
    updateWallet,
  };
};

export default useKyc;
