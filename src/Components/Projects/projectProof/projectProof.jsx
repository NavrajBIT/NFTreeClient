import "./projectProof.css";
import hero1 from "../../Home/assets/hero1.png";
import leftProof from "../../Home/assets/leftProof.png";
import rightProof from "../../Home/assets/rightProof.png";
import ErrorPage from "../../Error_page/ErrorPage";

const ProjectProof = ({ details }) => {
  if (!details) return <ErrorPage />;

  return (
    <div className="proof">
      <div className="proofBG">
        <h1 className="proofHeader">Proof Of Plantation</h1>
        <div className="detailsContainer">
          <table>
            <tr>
              <td>Contributor Name :-</td>
              <td>{details?.name}</td>
            </tr>
            <tr>
              <td>Project Name :-</td>
              <td>{details?.project}</td>
            </tr>
            <tr>
              <td>Contribution Date :-</td>
              <td>{details?.date}</td>
            </tr>
            <tr>
              <td>Email ID :-</td>
              <td>{details?.email}</td>
            </tr>
            <tr>
              <td>Total Amount :-</td>
              <td>{details?.amount}</td>
            </tr>
            <tr>
              <td>Total Trees :-</td>
              <td>{details?.trees}</td>
            </tr>
            <tr>
              <td>View Project :-</td>
              <td>
                <a
                  href={`http://bitbhoomi.com/projects/${details?.projectId}`}
                  target="_blank"
                  style={{ textDecoration: "underline" }}
                >
                  Project Link
                </a>
              </td>
            </tr>
          </table>

          <div className="proofImg">
            <img src={hero1} />
          </div>
        </div>
        <div className="proofEnd">
          <img src={leftProof} />
          <p>Thank you for Planting Trees.</p>
          <img src={rightProof} />
        </div>
      </div>
    </div>
  );
};

export default ProjectProof;
