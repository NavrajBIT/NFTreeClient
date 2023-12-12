import { useState, useEffect } from "react";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import html2canvas from "html2canvas";

const usereport = (projectId) => {
  const api = useAPI();
  const reportRef = useRef(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanged, sethasChanged] = useState(false);
  const [report, setReport] = useState(null);
  const [project, setproject] = useState(null);

  useEffect(() => {
    poppulateReport();
    poppulateProject();
  }, [isLoggedIn]);

  const poppulateReport = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/project-report/${projectId}`)
      .then((res) => {
        if (res.status === 200) {
          setReport(res[0]);
        }
      })
      .catch((err) => {
        if (err === 401) {
          setIsLoggedIn(false);
        }
      });
    setIsLoading(false);
  };
  const poppulateProject = async () => {
    setIsLoading(true);
    await api
      .crud("GET", `project/${projectId}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setproject(res);
        }
      })
      .catch((err) => {
        if (err === 401) {
          setIsLoggedIn(false);
        }
      });
    setIsLoading(false);
  };

  const changeValue = (key, e) => {
    sethasChanged(true);
    setReport((prev) => {
      let newdata = { ...prev };
      newdata[key] = e.target.value;
      return newdata;
    });
  };

  const formData = !report
    ? []
    : [
        [
          {
            label: "Trees age",
            type: "text",
            value: report.trees_age,
            onChange: (e) => changeValue("trees_age", e),
            maxLength: 100,
            required: true,
          },
          {
            label: "Trees growth",
            type: "text",
            value: report.trees_growth,
            onChange: (e) => changeValue("trees_growth", e),
            maxLength: 100,
            required: true,
          },
        ],
        [
          {
            label: "CO2 Absorption (kg)",
            type: "number",
            value: report.co2_absorption,
            onChange: (e) => changeValue("co2_absorption", e),
            maxLength: 100,
            required: true,
          },
          {
            label: "Oxygen Emission",
            type: "text",
            value: report.oxygen_emission,
            onChange: (e) => changeValue("oxygen_emission", e),
            maxLength: 100,
            required: true,
          },
        ],
        [
          {
            label: "Leaf Health",
            type: "text",
            value: report.leaf_health,
            onChange: (e) => changeValue("leaf_health", e),
            maxLength: 100,
            required: true,
          },
          {
            label: "Root Health",
            type: "text",
            value: report.root_health,
            onChange: (e) => changeValue("root_health", e),
            maxLength: 100,
            required: true,
          },
        ],
        [
          {
            label: "Soil Nitrogen",
            type: "number",
            value: report.soil_nitrogen,
            onChange: (e) => changeValue("soil_nitrogen", e),
            maxLength: 10,
            required: true,
          },
          {
            label: "Soil Phosphorus",
            type: "number",
            value: report.soil_phosphorus,
            onChange: (e) => changeValue("soil_phosphorus", e),
            maxLength: 10,
            required: true,
          },
          {
            label: "Soil Potassium",
            type: "number",
            value: report.soil_potassium,
            onChange: (e) => changeValue("soil_potassium", e),
            maxLength: 10,
            required: true,
          },
        ],
      ];

  const goBack = () => {
    navigate(`/myprojects/${projectId}`);
  };

  const handleSubmit = async () => {
    if (!hasChanged) {
      goBack();
      return;
    }
    setIsLoading(true);
    await api
      .crud("PUT", `project/project-report/update/${report.id}`, { ...report })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          alert("Report Updated Successfully!");
          navigate(`/myprojects/${projectId}/report`);
        }
      })
      .catch((err) => {
        if (err === 401) {
          setIsLoggedIn(false);
        }
      });
    setIsLoading(false);
  };

  const downloadReport = async () => {
    const reportElement = reportRef.current;

    if (!reportElement) {
      console.error("Couldn't find the report element");
      return;
    }

    try {
      // Use html2canvas to capture the content of the report element
      const canvas = await html2canvas(reportElement);

      // Convert the canvas content to a data URL (PNG format)
      const dataUrl = canvas.toDataURL("image/png");

      // Create a link element and trigger a download
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = "report.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error("Error converting to PNG:", error);
    }
  };

  return {
    projectId,
    isLoading,
    isLoggedIn,
    setIsLoggedIn,
    report,
    formData,
    hasChanged,
    handleSubmit,
    goBack,
    project,
    reportRef,
    downloadReport,
  };
};

export default usereport;
