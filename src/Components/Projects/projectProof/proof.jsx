import ProjectProof from "./projectProof"
// import useprofile from "../../Profile/useprofile"
import usedetails from "../projectDetails/usedetails"
import { useParams } from "react-router-dom"

const Proof = () => {
    // const script = useprofile()
    const params = useParams();
    const projectId = params.projectId;
    const details = usedetails(projectId, true);
    return (
        <div>
           {details.project && <ProjectProof  details={details}  />}
        </div>
    )
}

export default Proof