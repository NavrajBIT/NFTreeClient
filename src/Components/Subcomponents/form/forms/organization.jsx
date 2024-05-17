import Myform from "../myformnew";
import useAPI from "../../../../api/useAPI";
import { useState, useEffect } from "react";
import AuthPopup from "../../../Auth/authPopup";
import Loading from "../../loading/loading";
import { GrLinkNext } from "react-icons/gr";

const Organization = ({ backStep, submit, data, setData }) => {
  const [error, setError] = useState("");
  const orgKeys = [
    "org_name",
    "org_description",
    "org_website",
    "org_address",
    "org_country",
    "org_pin_code",
    "org_reg_id",
    "org_social_links",
  ];
  const socialMediaOptions = [
    {
      label: "LinkedIn",
      value: 1,
    },
    {
      label: "Instagram",
      value: 2,
    },
    {
      label: "Twitter",
      value: 3,
    },
  ];

  const blockchainOptions = [
    { label: "Select Blockchain", value: "", disabled: true, selected: true },
    {
      label: "Solana",
      value: 1,
    },
  ];

  const updateData = (key, value) => {
    setData((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const handleSubmit = async () => {
    // let isValid = true;

    // if (data.org_social_links) {
    //   Object.keys(data.org_social_links).map((key) => {
    //     if (!data.org_social_links[key] || data.org_social_links[key] === "")
    //       isValid = false;
    //   });
    // } else isValid = false;

    // if (!isValid) {
    //   setError("Please provide atleast one social media link.");
    // } else {
    //   console.log(data);
    // }
    console.log(data.org_social_links);
    submit();
  };

  const accountFormData = [
    [
      {
        label: "Name of the Organization",
        type: "text",
        value: data?.org_name,
        onChange: (e) => {
          updateData("org_name", e.target.value);
        },
        maxLength: 100,
        required: true,
      },
      {
        label: "Description",
        type: "text",
        value: data?.org_description,
        onChange: (e) => {
          e.target.value.length <= 500 &&
            updateData("org_description", e.target.value);
        },
        maxLength: 500,
        multiline: true,
        rows: 4,
        required: true,
      },

      // {
      //   label: "Solana Wallet Address",
      //   type: "text",
      //   required: true,
      //   value: data?.wallet,
      //   onChange: (e) => {
      //     updateData("wallet", e.target.value);
      //   },
      //   required: true,
      //   maxLength: 100,
      // },

      {
        label: "Address",
        type: "text",
        value: data?.org_address,
        onChange: (e) => {
          updateData("org_address", e.target.value);
        },
        maxLength: 500,
        multiline: true,
        rows: 4,
        required: true,
      },
      {
        label: "Country",
        type: "text",
        value: data?.org_country,
        onChange: (e) => {
          updateData("org_country", e.target.value);
        },
        maxLength: 100,
        required: true,
      },
      {
        label: "Area Code",
        type: "text",
        value: data?.org_pin_code,
        onChange: (e) => {
          updateData("org_pin_code", e.target.value);
        },
        maxLength: 50,
        required: true,
      },
      {
        label: "Website",
        type: "text",
        value: data?.org_website,
        onChange: (e) => {
          updateData("org_website", e.target.value);
        },
        maxLength: 100,
        required: true,
      },
      {
        label: "Registration Id",
        type: "text",
        value: data?.org_reg_id,
        onChange: (e) => {
          updateData("org_reg_id", e.target.value);
        },
        maxLength: 50,
        required: true,
      },

      {
        label: "Social Media Links (optional)",
        type: "socialMediaData",
        value: data?.org_social_links,
        onChange: (e, label) => {
          setError("");
          let socials = {};

          if (data.org_social_links) {
            Object.keys(data.org_social_links).map((key) => {
              if (data.org_social_links[key] !== "") {
                socials[key] = data.org_social_links[key];
              }
            });
          }

          socials[label] = e.target.value;

          setData((prev) => ({
            ...prev,
            org_social_links: socials,
          }));
        },
        required: false,
        options: { socialMediaOptions },
      },
    ],
  ];

  return (
    <Myform
      heading={"Organization Details"}
      formdata={accountFormData}
      formButton={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <p>Next</p>
          <GrLinkNext />
        </div>
      }
      back={backStep}
      handleSubmit={handleSubmit}
      error={error}
    >
      {error && <div style={{ color: "red" }}>*{error}</div>}
    </Myform>
  );
};

export default Organization;
