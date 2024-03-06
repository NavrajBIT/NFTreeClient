// import BioChart from "./BioChart";
import BioChart1 from "./BioChart1";
import CO2 from "./CO2";
import CarbonChart from "./CarbonChart";
import "./ProjectReport.css";
import { HiMiniShare } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";

const ProjectReport = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left top, #243900, #eaffc6)",
        width: "100%",
        minHeight: "var(--min-height-page)",
      }}
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
          <p
            className="projectRT"
          >
            Project report
          </p>
          {true && (
            <div className="reportButton">
              <button>
                <p>Edit</p> <MdEdit />
              </button>
              <button>
                <p>Share</p> <HiMiniShare />
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
                      <td>19.076° N to 72.877° E</td>
                    </tr>
                    <tr>
                      <td>Project Age</td>
                      <td>
                        <img src="/ProjectReport/PAge.png" />
                      </td>
                      <td>6 Years</td>
                    </tr>
                    <tr>
                      <td>Land Covered</td>
                      <td>
                        <img src="/ProjectReport/Land.png" />
                      </td>
                      <td>2 Acres</td>
                    </tr>
                    <tr>
                      <td>Total Trees Planted</td>
                      <td>
                        <img src="/ProjectReport/Trees.png" />
                      </td>
                      <td>1500</td>
                    </tr>
                    <tr>
                      <td>Average Age</td>
                      <td>
                        <img src="/ProjectReport/AAge.png" />
                      </td>
                      <td>6-8 Years</td>
                    </tr>
                    <tr>
                      <td>Biomass weight</td>
                      <td>
                        <img src="/ProjectReport/Biomass.png" />
                      </td>
                      <td>3-5 Tonnes</td>
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
              <h2>Carbon Sequestration</h2>
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
            </div>

            <div className="gridBoxContent">
              <div style={{ width: "90%" }}>
                <CO2 />
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
                      <th>TPES OF VEGETATION</th>
                      <th>ESTIMATED 20 Tr.GRG REMGAL RATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pitch Pine</td>
                      <td>6</td>
                      <td>Tropical Evergreen Forest</td>
                      <td>4.5to 40.7 t CO2/ha/yr</td>
                    </tr>
                    <tr>
                      <td>Coconut</td>
                      <td>7</td>
                      <td>Tropical Evergreen Forest</td>
                      <td>4.5to 40.7 t CO2/ha/yr</td>
                    </tr>
                    <tr>
                      <td>Mango</td>
                      <td>8</td>
                      <td>Tropical Evergreen Forest</td>
                      <td>4.5to 40.7 t CO2/ha/yr</td>
                    </tr>
                    <tr>
                      <td>species</td>
                      <td>6</td>
                      <td>Tropical Evergreen Forest</td>
                      <td>4.5to 40.7 t CO2/ha/yr</td>
                    </tr>
                    <tr>
                      <td>Species</td>
                      <td>5</td>
                      <td>Tropical Evergreen Forest</td>
                      <td>4.5to 40.7 t CO2/ha/yr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectReport;
