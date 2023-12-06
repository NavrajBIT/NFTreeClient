import { useState } from "react";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";

const usecreate = () => {
  const api = useAPI();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formvalues, setFormvalues] = useState({
    name: "",
    description: "Tell us a little about the project...",
    plant_types: "",
    area: "",
    plant_planned: "",
    donation: "",
    address: "",
    city: "",
    country: "",
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    let apidata = { ...formvalues };
    if (apidata.donation === "") delete apidata.donation;
    await api
      .crud("POST", "project/myproject", apidata)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 299) {
          navigate(`/myprojects/${res.id}`);
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  const changeValue = (key, value) => {
    setFormvalues((prev) => {
      let newValues = { ...prev };
      newValues[key] = value;
      return newValues;
    });
  };

  const formdatafunding = [
    [
      {
        label: "Project Name",
        type: "text",
        required: true,
        value: formvalues["name"],
        onChange: (e) => changeValue("name", e.target.value),
        maxLength: 50,
      },
      {
        label: "Project Description",
        type: "text",
        required: true,
        multiline: true,
        rows: 4,
        value: formvalues["description"],
        onChange: (e) => changeValue("description", e.target.value),
        maxLength: 500,
      },
      {
        label: "Type of Plants",
        type: "text",
        required: true,
        value: formvalues["plant_types"],
        onChange: (e) => changeValue("plant_types", e.target.value),
        maxLength: 500,
      },
    ],
    [
      {
        label: "Total Plantation Area (sq. m.)",
        type: "number",
        required: true,
        value: formvalues["area"],
        onChange: (e) => changeValue("area", e.target.value),
      },
      {
        isHalf: [
          {
            label: "No of plants planned",
            type: "number",
            required: true,
            value: formvalues["plant_planned"],
            onChange: (e) => changeValue("plant_planned", e.target.value),
            isHalf: true,
          },
          {
            label: "Donation per plant",
            type: "number",
            required: true,
            value: formvalues["donation"],
            onChange: (e) => changeValue("donation", e.target.value),
            isHalf: true,
          },
        ],
      },
    ],
    [
      {
        label: "Address",
        type: "text",
        required: true,
        multiline: true,
        rows: 2,
        value: formvalues["address"],
        onChange: (e) => changeValue("address", e.target.value),
        maxLength: 500,
      },
      {
        isHalf: [
          {
            label: "City",
            type: "text",
            required: true,
            value: formvalues["city"],
            onChange: (e) => changeValue("city", e.target.value),
            maxLength: 100,
          },
          {
            label: "Country",
            type: "text",
            required: true,
            value: formvalues["country"],
            onChange: (e) => changeValue("country", e.target.value),
            maxLength: 100,
          },
        ],
      },
    ],
  ];
  const formdatamonitoring = [
    [
      {
        label: "Project Name",
        type: "text",
        required: true,
        value: formvalues["name"],
        onChange: (e) => changeValue("name", e.target.value),
        maxLength: 50,
      },
      {
        label: "Project Description",
        type: "text",
        required: true,
        multiline: true,
        rows: 4,
        value: formvalues["description"],
        onChange: (e) => changeValue("description", e.target.value),
        maxLength: 500,
      },
      {
        label: "Type of Plants",
        type: "text",
        required: true,
        value: formvalues["plant_types"],
        onChange: (e) => changeValue("plant_types", e.target.value),
        maxLength: 500,
      },
    ],
    [
      {
        isHalf: [
          {
            label: "Total Plantation Area (sq. m.)",
            type: "number",
            required: true,
            value: formvalues["area"],
            onChange: (e) => changeValue("area", e.target.value),
          },
          {
            label: "No of plants to be monitored",
            type: "number",
            required: true,
            value: formvalues["plant_planned"],
            onChange: (e) => changeValue("plant_planned", e.target.value),
            isHalf: true,
          },
        ],
      },
    ],
    [
      {
        label: "Address",
        type: "text",
        required: true,
        multiline: true,
        rows: 2,
        value: formvalues["address"],
        onChange: (e) => changeValue("address", e.target.value),
        maxLength: 500,
      },
      {
        isHalf: [
          {
            label: "City",
            type: "text",
            required: true,
            value: formvalues["city"],
            onChange: (e) => changeValue("city", e.target.value),
            maxLength: 100,
          },
          {
            label: "Country",
            type: "text",
            required: true,
            value: formvalues["country"],
            onChange: (e) => changeValue("country", e.target.value),
            maxLength: 100,
          },
        ],
      },
    ],
  ];

  return { formdatafunding, formdatamonitoring, handleSubmit, isLoading };
};

export default usecreate;
