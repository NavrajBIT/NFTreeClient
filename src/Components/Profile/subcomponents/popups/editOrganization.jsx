import { useEffect, useState } from "react";
import Popup from "../../../Subcomponents/Popup/popup";
import Myform from "../../../Subcomponents/form/myform";
import useAPI from "../../../../api/useAPI";

const EditOrganizationPopup = ({ script }) => {
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanged, sethasChanged] = useState(false);
  const [hasEmailChanged, sethasEmailChanged] = useState(false);
  const [organization, setOrganization] = useState({
    name: "",
    address: "",
    description: "",
    website: "",
    country: "",
    reg_id: "",
  });

  useEffect(() => {
    poppulateInitialvalues();
  }, [script]);
  const poppulateInitialvalues = () => {
    setOrganization(script?.organization);
  };
  const formData = [
    [
      {
        label: "Name",
        type: "text",
        value: organization.name,
        onChange: (e) => {
          sethasChanged(true);
          setOrganization((prev) => {
            let newdata = { ...prev };
            newdata["name"] = e.target.value;
            return newdata;
          });
        },
        maxLength: 100,
      },
      {
        label: "Description",
        type: "text",
        value: organization.description,
        multiline: true,
        rows: 4,
        onChange: (e) => {
          sethasChanged(true);
          setOrganization((prev) => {
            let newdata = { ...prev };
            newdata["description"] = e.target.value;
            return newdata;
          });
        },
        maxLength: 500,
      },
      {
        label: "Address",
        type: "text",
        value: organization.address,
        multiline: true,
        rows: 4,
        onChange: (e) => {
          sethasChanged(true);
          setOrganization((prev) => {
            let newdata = { ...prev };
            newdata["address"] = e.target.value;
            return newdata;
          });
        },
        maxLength: 500,
      },
      {
        label: "Country",
        type: "text",
        value: organization.country,
        onChange: (e) => {
          sethasChanged(true);
          setOrganization((prev) => {
            let newdata = { ...prev };
            newdata["country"] = e.target.value;
            return newdata;
          });
        },
        maxLength: 100,
      },
      {
        label: "Website",
        type: "text",
        value: organization.website,
        onChange: (e) => {
          sethasChanged(true);
          setOrganization((prev) => {
            let newdata = { ...prev };
            newdata["website"] = e.target.value;
            return newdata;
          });
        },
        maxLength: 100,
      },
      {
        label: "Registration Id",
        type: "text",
        value: organization.reg_id,
        onChange: (e) => {
          sethasChanged(true);
          setOrganization((prev) => {
            let newdata = { ...prev };
            newdata["reg_id"] = e.target.value;
            return newdata;
          });
        },
        maxLength: 50,
      },
    ],
  ];

  const handleSubmit = async (e) => {
    if (isLoading) return;
    if (!hasChanged) {
      script.setEditorganizationPopup(false);
      return;
    }
    setIsLoading(true);
    let apiData = { ...organization };
    delete apiData.reg_proof;
    await api
      .crud("PATCH", `user/organization/${script.organization.id}`, apiData)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 299) {
          script.poppulateData("user/organization", script.setOrganization);
        }
      })
      .catch((err) => {
        if (err === 401) script.setIsLoggedIn(false);
      });

    setIsLoading(false);
    script.setEditorganizationPopup(false);
  };

  const buttonText = isLoading
    ? "Saving"
    : hasChanged || hasEmailChanged
    ? "Save"
    : "OK";

  return (
    <Popup close={() => script.setEditorganizationPopup(false)}>
      {organization && (
        <Myform
          heading="Edit Organization Details"
          formdata={formData}
          formButton={buttonText}
          handleSubmit={handleSubmit}
        />
      )}
    </Popup>
  );
};

export default EditOrganizationPopup;
