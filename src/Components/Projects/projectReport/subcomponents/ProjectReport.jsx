// import BioChart from "./BioChart";
import { useEffect, useRef, useState } from "react";
import BioChart1 from "./BioChart1";
import CO2 from "./CO2";
import CarbonChart from "./CarbonChart";
// import CarbonCopy from "./CarbonCopy"
import "./ProjectReport.css";
import "./charts.css";
import { HiMiniShare } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";
import { elements } from "chart.js";
import { useLocation } from "react-router-dom";
import useAPI from "../../../../../api/useAPI";
import html2canvas from "html2canvas";
import QRCode from "react-qr-code";

const ProjectReport = () => {
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const [projectReportData, setProjectReportData] = useState({}); // Initialize with an empty object
  const species = projectReportData.species || []; // Use empty array if species is undefined
  // const speciesType = species.map(item => item.plant);
  // const speciesData = species.map(item => item.percentage);
  const location = useLocation();
  const path = location.pathname;
  const paths = path.split("/");
  const projectId = paths[2];
  const qDataCo2 = projectReportData.co2_equivalent || [];
  const qDataCar = projectReportData.co2_sequestration || [];
  const carStartDate = qDataCar.map((item) => item.start_date);
  const carEndDate = qDataCar.map((item) => item.end_date);
  const startDateCo2 = qDataCo2.map((item) => item.start_date);
  const endDateCo2 = qDataCo2.map((item) => item.end_date);
  // console.log(speciesType);
  const contentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const api = useAPI();

  const fetchReportData = async () => {
    try {
      const response = await fetch(
        `${API_URL}project/project-report/${projectId}/`
      );
      const res = await response.json();
      setProjectReportData(res[0]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, []);

  const sendReport = async () => {
    setIsLoading(true);
    const content = contentRef.current;
    const mybutton = document.getElementById("sendReport");
    mybutton.style.display = "none";
    const qr = document.getElementById("qrcode");
    qr.style.display = "flex";

    try {
      const canvas = await html2canvas(content);
      const imageData = canvas.toDataURL("image/png");

      const blob = await fetch(imageData).then((response) => response.blob());

      const formData = new FormData();
      formData.append("image", blob, "image.png");
      formData.append("project_id", projectId);
      await api
        .crud("POST", "project/send-report", formData, true)
        .then((res) => {
          alert("Report sent successfully!");
        })
        .catch((err) => console.log(err));

      console.log("API response:", response);
    } catch (error) {
      console.error("Error capturing or sending image:", error);
    } finally {
      mybutton.style.display = "flex";
      qr.style.display = "none";
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left top, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
      }}
      ref={contentRef}
    >
      <div
        style={{
          width: "100%",
          height: "var(--nav-height)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)",
        }}
      />
      <div style={{ width: "95%", margin: "auto" }}>
        <div
          style={{
            padding: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className="projectRT">Project report</p>
          {true && (
            <div className="reportButton">
              {/* <button>
                <p>Edit</p> <MdEdit />
              </button> */}
              <button onClick={sendReport} disabled={isLoading} id="sendReport">
                <p>{isLoading ? "Sending..." : "Send Report"}</p>{" "}
                <HiMiniShare />
              </button>
            </div>
          )}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(45%,1fr))",
            gap: "30px",
            gridAutoRows: "1fr",
            padding: "30px 0",
            paddingBottom: "100px",
          }}
          className="gridContainer"
        >
          <div className="GridBox1">
            <div className="gridBoxHeading1">
              <h2>Enhancement in Bio diversity</h2>
            </div>

            <div className="gridBoxContent">
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>PARAMETERS</th>
                      <th>ICON</th>
                      <th>VALUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Geolocation</td>
                      <td>
                        <img src="/ProjectReport/Geo.png" />
                      </td>
                      <td>{projectReportData.geolocation}</td>
                    </tr>
                    <tr>
                      <td>Project Age</td>
                      <td>
                        <img src="/ProjectReport/PAge.png" />
                      </td>
                      <td>{projectReportData.project_age} Years</td>
                    </tr>
                    <tr>
                      <td>Land Covered</td>
                      <td>
                        <img src="/ProjectReport/Land.png" />
                      </td>
                      <td>{projectReportData.land_covered} Acres</td>
                    </tr>
                    <tr>
                      <td>Total Trees Planted</td>
                      <td>
                        <img src="/ProjectReport/Trees.png" />
                      </td>
                      <td>{projectReportData.total_trees}</td>
                    </tr>
                    {/* <tr>
                      <td>Average Age</td>
                      <td>
                        <img src="/ProjectReport/AAge.png" />
                      </td>
                      <td>6-8 Years</td>
                    </tr>  */}
                    <tr>
                      <td>Biomass weight</td>
                      <td>
                        <img src="/ProjectReport/Biomass.png" />
                      </td>
                      <td>{projectReportData.biomass_weight}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bio">
                {/* <BioChart /> */}
                <BioChart1 />
              </div>
            </div>
          </div>

          <div className="GridBox">
            <div className="gridBoxHeading">
              <h2>Estimated Projection of GHG Removal</h2>
            </div>
            <div className="gridBoxContent">
              <div className="boxContent4">
                <table>
                  <thead>
                    <tr>
                      <th>SPECIES</th>
                      <th>AGE</th>
                      <th>TYPES OF VEGETATION</th>
                      <th>ESTIMATED 20 Tr.GRG REMGAL RATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {species.map((element, index) => (
                      <tr key={index}>
                        <td>{element.plant}</td>
                        <td>{element.age}</td>
                        <td>{element.species_type}</td>
                        <td>{element.ghg_removal_rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="GridBox">
            <div className="gridBoxHeading">
              <h2>Carbon Sequestration</h2>
              <p className="dates-carbon">
                {carStartDate[0]} To {carEndDate[0]}
              </p>
            </div>

            <div className="gridBoxContent">
              <div style={{ width: "100%" }}>
                <CarbonChart />
              </div>
            </div>
          </div>

          <div className="GridBox">
            <div className="gridBoxHeading">
              <h2>CO2 Equivalent</h2>
              <p className="dates-co2">
                {startDateCo2[0]} To {endDateCo2[0]}
              </p>
            </div>

            <div className="gridBoxContent">
              <div style={{ width: "90%" }}>
                <CO2 />
              </div>
            </div>
          </div>

          <div
            style={{
              background: "transparent",
              padding: "16px",
              width: "fit-content",
              display: "none",
            }}
            id="qrcode"
          >
            <QRCode
              value={`https://bitbhoomi.com/projects/${projectId}/report`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectReport(projectReportData);
