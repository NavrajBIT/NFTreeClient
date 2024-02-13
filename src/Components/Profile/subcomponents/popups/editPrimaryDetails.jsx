import { useEffect, useState } from "react";
import Popup from "../../../Subcomponents/Popup/popup";
import Myform from "../../../Subcomponents/form/myform";
import useAPI from "../../../../api/useAPI";

const EditPrimaryDetails = ({ script }) => {
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanged, sethasChanged] = useState(false);
  const [userData, setUserdata] = useState({
    designation: script?.account?.designation,
    phone: script?.account?.phone,
    nin: script?.account?.nin,
  });
  const ninproof = script?.account?.nin_proof;
  const signed_note = script?.account?.signed_note;

  const updateData = (key, value) => {
    setUserdata((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };
  const formData = [
    [
      {
        label: "Designation",
        type: "text",
        value: userData.designation,
        onChange: (e) => {
          sethasChanged(true);
          updateData("designation", e.target.value);
        },
        maxLength: 100,
      },
      {
        label: "Phone",
        type: "text",
        value: userData.phone,
        onChange: (e) => {
          sethasChanged(true);
          updateData("phone", e.target.value);
        },
        maxLength: 100,
      },
      {
        label: "National Identification Number(NIN)",
        type: "text",
        value: userData.nin,
        onChange: (e) => {
          sethasChanged(true);
          updateData("nin", e.target.value);
        },
        maxLength: 100,
      },
      {
        label: "NIN Proof",
        type: "file",
        value: ninproof,
        onChange: (e) => {
          uploadFile(e.target.files[0], "nin_proof");
        },
      },
      {
        label: "Signed Note",
        type: "file",
        value: signed_note,
        onChange: (e) => {
          uploadFile(e.target.files[0], "signed_note");
        },
      },
    ],
  ];

  const handleSubmit = async (e) => {
    if (isLoading) return;
    if (!hasChanged) {
      script.setEditprofilePopup(false);
      return;
    }
    setIsLoading(true);
    await api
      .crud("PATCH", `user/account/${script.account.id}`, {
        ...userData,
      })
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 299) {
          script.poppulateData("user/account", script.setAccount);
        }
      })
      .catch((err) => {
        if (err === 401) script.setIsLoggedIn(false);
      });

    setIsLoading(false);
    script.setEditprofilePopup(false);
  };

  const uploadFile = async (file, key) => {
    setIsLoading(true);
    let formdata = new FormData();
    formdata.append(key, file);
    await api
      .crud("PATCH", `user/account/${script.account.id}`, formdata, true)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          script.poppulateData("user/account", script.setAccount);
        }
      })
      .catch((err) => {
        if (err === 401) script.setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const buttonText = isLoading ? "Saving" : hasChanged ? "Save" : "OK";

  return (
    <Popup close={() => script.setEditprofilePopup(false)}>
      <Myform
        heading="Edit Profile"
        formdata={formData}
        formButton={buttonText}
        handleSubmit={handleSubmit}
      />
    </Popup>
  );
};

export default EditPrimaryDetails;
