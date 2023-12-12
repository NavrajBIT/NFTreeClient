import {
  accountDetails,
  organizationDetails,
  ApplyKyc,
} from "../../../api/kycApi";

const FinalForm = ({ data, fetchStatus, setIsLoading }) => {
  const newData = {
    "First Name": data.firstName,
    "Last Name": data.lastName,
    Email: data.email,
    Phone: data.phone,
    "Organization Name": data.orgName,
    "Organization Description": data.description,
    "Organization Address": data.address,
    "Organization Country": data.country,
    "Organization Website": data.website,
    "Organization Registration Id": data.registrationId,
    "Organization Registration Proof":
      data.regProof == undefined ? data.regProof : data.regProof["name"],
    "Designation of Representative": data.designation,
    "Representative Signed Document":
      data.signedNote == undefined ? data.signedNote : data.signedNote["name"],
  };

  const submitKyc = async () => {
    setIsLoading(true);
    const basicDetails = {
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
    };

    const orgDetails = {
      name: data.orgName,
      address: data.address,
      country: data.country,
      website: data.website,
      description: data.description,
      reg_id: data.registrationId,
      reg_proof: data.regProof,
    };

    await accountDetails(basicDetails);
    await organizationDetails(orgDetails);
    await ApplyKyc();
    await fetchStatus();
    setIsLoading(false);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          marginBottom: "2rem",
          className: "form-container",
        }}
      >
        <h1
          style={{
            margin: "auto",
            margin: "1rem auto 3rem",
            textAlign: "center",
          }}
        >
          Final Form Submittion
        </h1>

        <div style={{ margin: "auto" }}>
          <table>
            <tbody>
              {Object.keys(newData).map((key) => (
                <tr key={key}>
                  <th style={{ textAlign: "start", width: "50%" }}>{key}</th>
                  <td style={{ width: "30%" }}>{newData[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="form-button"
          style={{ width: "25%", margin: "10vh auto 0px" }}
        >
          <button onClick={submitKyc}>submit</button>
        </div>
      </div>
    </>
  );
};

export default FinalForm;
