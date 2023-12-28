const FinalForm = () => {
  console.log(kycData);
  const newData = {
    "First Name": kycData.basicForm.firstName,
    "Last Name": kycData.basicForm.lastName,
    Email: kycData.basicForm.email,
    Phone: kycData.basicForm.phone,
    "Organization Name": kycData.organizationForm.orgName,
    "Organization Description": kycData.organizationForm.description,
    "Organization Address": kycData.organizationForm.address,
    "Organization Country": kycData.organizationForm.country,
    "Organization Website": kycData.organizationForm.website,
    "Organization Registration Id": kycData.organizationForm.registrationId,
    "Organization Registration Proof":
      kycData.organizationForm.regProof == undefined
        ? kycData.organizationForm.regProof
        : kycData.organizationForm.regProof["name"],
    "Designation of Representative": kycData.representativeForm.designation,
    "Representative Signed Document":
      kycData.representativeForm.signedNote == undefined
        ? kycData.representativeForm.signedNote
        : kycData.representativeForm.signedNote["name"],
  };

  const submitKyc = async () => {
    console.log(kycData);
    setIsLoading(true);
    const basicDetails = {
      first_name: newData["First Name"],
      last_name: newData["Last Name"],
      phone: newData["Phone"],
    };

    const orgDetails = {
      name: newData["Organization Name"],
      address: newData["Organization Address"],
      country: newData["Organization Country"],
      website: newData["Organization Website"],
      description: newData["Organization Description"],
      reg_id: newData["Organization Registration Id"],
      reg_proof: newData["Organization Registration Proof"],
    };

    // await accountDetails(basicDetails);
    // await organizationDetails(orgDetails);
    // await ApplyKyc();
    // await fetchStatus();
    // setIsLoading(false);
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

        <div>
          <table
            style={{
              margin: "auto",
              borderRadius: "var(--border-radius)",
              padding: "var(--padding-main)",
              background: "var(--green-30)",
            }}
          >
            <tbody>
              {Object.keys(newData).map((key) => (
                <tr key={key}>
                  <th style={{ textAlign: "start", width: "50%" }}>{key}</th>
                  <td style={{ width: "30%", padding: "var(--padding-light)" }}>
                    {newData[key]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="form-button"
          style={{
            width: "30%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "var(--padding-light)",
          }}
        >
          <div className="secondarybutton">
            <button onClick={""}>Back</button>
          </div>
          <div className="primarybutton">
            <button onClick={submitKyc}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalForm;
