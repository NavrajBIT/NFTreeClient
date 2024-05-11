import { useState } from "react";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";

const usecreate = () => {
  const api = useAPI();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formvalues, setFormvalues] = useState({
    type: 1,
    investment_type: "Carbon Credits",
    name: "",
    description: "",
    area: "",
    age: 0,
    credits_produced: false,
    plant_types: "",
    phase: 1,
    plant_planned: "",
    donation: "",
    coordinates: "",
    address: "",
    city: "",
    country: "",
    pin_code: "",
    revenue_dist_date: null,
    revenue_dist_details: "",
    roi: 0,
    donation_method: 1,
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

  const typeOptions = [
    {
      label: "Monitoring",
      value: 1,
    },
    {
      label: "Funding and Monitoring",
      value: 2,
    },
    {
      label: "Investment",
      value: 3,
    },
  ];

  const getTypeValue = () => {
    let label = "";
    typeOptions.map((type) => {
      if (type.value === formvalues.type) {
        label = type.label;
      }
    });
    return label;
  };
  const phaseOptions = [
    {
      label: "New Project",
      value: 1,
    },
    {
      label: "Existing Project",
      value: 2,
    },
  ];

  const getPhaseValue = () => {
    let label = "";
    phaseOptions.map((type) => {
      if (type.value === formvalues.phase) {
        label = type.label;
      }
    });
    return label;
  };
  const formdata1 = [
    [
      {
        label: "Project Type",
        type: "select",
        required: true,
        value: getTypeValue(),
        options: typeOptions,
        select: true,
        onChange: (e) => {
          console.log(e);
          changeValue("type", e.value);
        },
        maxLength: 50,
      },
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
        placeholder: "Tell us a little about the project...",
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
        label: "Project Phase",
        type: "select",
        required: true,
        value: getPhaseValue(),
        options: phaseOptions,
        select: true,
        onChange: (e) => {
          changeValue("phase", e.value);
        },
        maxLength: 50,
      },
      {
        label: "Project Coordinates",
        type: "text",
        required: true,
        multiline: true,
        rows: 2,
        value: formvalues["coordinates"],
        onChange: (e) => changeValue("coordinates", e.target.value),
        maxLength: 500,
      },
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
        label: "Area Code",
        type: "text",
        required: true,
        value: formvalues["pin_code"],
        onChange: (e) => changeValue("pin_code", e.target.value),
        maxLength: 50,
      },
      {
        isHalf: [
          {
            label: "State",
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

  const formdata2 = [
    [
      {
        label: "Project Type",
        type: "select",
        required: true,
        value: getTypeValue(),
        options: typeOptions,
        select: true,
        onChange: (e) => {
          console.log(e);
          changeValue("type", e.value);
        },
        maxLength: 50,
      },
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
        placeholder: "Tell us a little about the project...",
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
            label: "No of plants planned",
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
        label: "Project Phase",
        type: "select",
        required: true,
        value: getPhaseValue(),
        options: phaseOptions,
        select: true,
        onChange: (e) => {
          changeValue("phase", e.value);
        },
        maxLength: 50,
      },
      {
        label: "Project Coordinates",
        type: "text",
        required: true,
        multiline: true,
        rows: 2,
        value: formvalues["coordinates"],
        onChange: (e) => changeValue("coordinates", e.target.value),
        maxLength: 500,
      },
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
        label: "Area Code",
        type: "text",
        required: true,
        value: formvalues["pin_code"],
        onChange: (e) => changeValue("pin_code", e.target.value),
        maxLength: 50,
      },
      {
        isHalf: [
          {
            label: "State",
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
      {
        isHalf: [
          {
            label: "Per Tree Donation $",
            type: "text",
            required: true,
            value: formvalues["donation"],
            onChange: (e) => changeValue("donation", e.target.value),
            maxLength: 100,
          },
          {
            label: "Donation Target $",
            type: "text",
            required: true,
            value: formvalues["donation_target"],
            onChange: (e) => changeValue("donation_target", e.target.value),
            maxLength: 100,
          },
        ],
      },
    ],
  ];

  const creditsOptions = [
    {
      label: "Yes",
      value: true,
    },
    {
      label: "No",
      value: false,
    },
  ];

  const getCreditsValue = () => {
    let label = "";
    creditsOptions.map((type) => {
      if (type.value === formvalues.credits_produced) {
        label = type.label;
      }
    });
    return label;
  };
  const investOptions = [
    {
      label: "Carbon Credits",
      value: "Carbon Credits",
    },
    {
      label: "Green Credits",
      value: "Green Credits",
    },
  ];

  const formdata3 = [
    [
      {
        label: "Project Type",
        type: "select",
        required: true,
        value: formvalues["investment_type"],
        options: typeOptions,
        select: true,
        onChange: (e) => {
          console.log(e);
          changeValue("investment_type", e.value);
        },
        maxLength: 50,
      },
      {
        label: "Investment Type",
        type: "select",
        required: true,
        value: getTypeValue(),
        options: investOptions,
        select: true,
        onChange: (e) => {
          console.log(e);
          changeValue("type", e.value);
        },
        maxLength: 50,
      },

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
        placeholder: "Tell us a little about the project...",
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
            label: "No of plants",
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
        label: "Project Phase",
        type: "select",
        required: true,
        value: getPhaseValue(),
        options: phaseOptions,
        select: true,
        onChange: (e) => {
          changeValue("phase", e.value);
        },
        maxLength: 50,
      },
      {
        label: "Project Coordinates",
        type: "text",
        required: true,
        multiline: true,
        rows: 2,
        value: formvalues["coordinates"],
        onChange: (e) => changeValue("coordinates", e.target.value),
        maxLength: 500,
      },
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
        label: "Area Code",
        type: "text",
        required: true,
        value: formvalues["pin_code"],
        onChange: (e) => changeValue("pin_code", e.target.value),
        maxLength: 50,
      },
      {
        isHalf: [
          {
            label: "State",
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
      {
        isHalf: [
          {
            label: "Per Tree Cost $",
            type: "text",
            required: true,
            value: formvalues["donation"],
            onChange: (e) => changeValue("donation", e.target.value),
            maxLength: 100,
          },
          {
            label: "Donation Target $",
            type: "text",
            required: true,
            value: formvalues["donation_target"],
            onChange: (e) => changeValue("donation_target", e.target.value),
            maxLength: 100,
          },
        ],
      },
      {
        isHalf: [
          {
            label: "Credits Generated Before?",
            type: "select",
            required: true,
            value: getCreditsValue(),
            options: creditsOptions,
            select: true,
            onChange: (e) => {
              changeValue("credits_produced", e.value);
            },
            maxLength: 50,
          },
          {
            label: "Expected Approximate ROI",
            type: "text",
            required: true,
            value: formvalues["roi"],
            onChange: (e) => changeValue("roi", e.target.value),
            maxLength: 100,
          },
        ],
      },
      {
        label: "Revenue Distribution Details",
        type: "text",
        required: true,
        value: formvalues["revenue_dist_details"],
        onChange: (e) => changeValue("revenue_dist_details", e.target.value),
        maxLength: 500,
        multiline: true,
        rows: 4,
      },
      {
        label: "Upcoming Revenue Distribution Date",
        type: "date",
        required: true,
        value: formvalues["revenue_dist_date"],
        onChange: (e) => changeValue("revenue_dist_date", e.target.value),
        maxLength: 100,
      },
    ],
  ];

  return {
    formvalues,
    formdata1,
    formdata2,
    formdata3,
    handleSubmit,
    isLoading,
  };
};

export default usecreate;
