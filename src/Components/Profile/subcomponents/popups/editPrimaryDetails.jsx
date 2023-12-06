import { useEffect, useState } from "react";
import Popup from "../../../Popup/popup";
import Myform from "../../../form/myform";
import useAPI from "../../../../api/useAPI";

const EditPrimaryDetails = ({ script }) => {
  const api = useAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [hasChanged, sethasChanged] = useState(false);
  const [hasEmailChanged, sethasEmailChanged] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    poppulateInitialvalues();
  }, [script]);
  const poppulateInitialvalues = () => {
    setFirstName(
      script?.account?.first_name ? script?.account?.first_name : ""
    );
    setLastName(script?.account?.last_name ? script?.account?.last_name : "");
    setPhone(script?.account?.phone ? script?.account?.phone : "");
    setWallet(script?.account?.wallet ? script?.account?.wallet : "");
  };
  const formData = [
    [
      {
        label: "First Name",
        type: "text",
        value: firstName,
        onChange: (e) => {
          sethasChanged(true);
          setFirstName(e.target.value);
        },
        maxLength: 50,
      },
      {
        label: "Last Name",
        type: "text",
        value: lastName,
        onChange: (e) => {
          sethasChanged(true);
          setLastName(e.target.value);
        },
        maxLength: 50,
      },
      {
        label: "Phone",
        type: "text",
        value: phone,
        onChange: (e) => {
          sethasChanged(true);
          setPhone(e.target.value);
        },
        maxLength: 15,
      },
      {
        label: "Wallet",
        type: "text",
        value: wallet,
        onChange: (e) => {
          sethasChanged(true);
          setWallet(e.target.value);
        },
        maxLength: 100,
      },
    ],
  ];

  const handleSubmit = async (e) => {
    if (isLoading) return;
    if (!hasChanged && !hasEmailChanged) {
      script.setEditprofilePopup(false);
      return;
    }
    setIsLoading(true);
    await api
      .crud("PATCH", `user/account/${script.account.id}`, {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        wallet: wallet,
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

    if (hasEmailChanged) {
      await api
        .crud("PATCH", `user/email/${script.account.id}`, {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          wallet: wallet,
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
    }
    setIsLoading(false);
    script.setEditprofilePopup(false);
  };

  const buttonText = isLoading
    ? "Saving"
    : hasChanged || hasEmailChanged
    ? "Save"
    : "OK";

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
