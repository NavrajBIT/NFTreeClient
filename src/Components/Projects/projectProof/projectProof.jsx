import "./projectProof.css";
import { Link } from "react-router-dom";
import hero1 from "../../Home/assets/hero1.png"
import leftProof from "../../Home/assets/leftProof.png"
import rightProof from "../../Home/assets/rightProof.png"

const ProjectProof = ({ details }) => {
    const data = details.project.owner.representative;
    return (
        <div className="proof">
            <div className="proofBG">
            <h1 className="proofHeader">Proof Of Plantation</h1>
            <div className="detailsContainer">
                <table>
                    <tr>
                        <td>Contributor Name :-</td>
                        <td>{data?.first_name + " " + data?.last_name}</td>
                    </tr>
                    <tr>
                        <td>Project Name :-</td>
                        <td>{details?.project?.name}</td>
                    </tr>
                    <tr>
                        <td>Contribution Date :-</td>
                        <td>{details?.project?.date}</td>
                    </tr>
                    <tr>
                        <td>Email ID :-</td>
                        <td>{data?.email}</td>
                    </tr>
                    <tr>
                        <td>Total Amount :-</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Total Trees :-</td>
                        <td>{details?.project?.plant_planned}</td>
                    </tr>
                    <tr>
                        <td>View Project :-</td>
                        <td><a href={`http://bitbhoomi.com/projects/${details?.projectId}`} target="_blank">bitbhoomi.com</a></td>
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
    )
}

export default ProjectProof