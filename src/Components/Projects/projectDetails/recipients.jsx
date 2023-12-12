import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Popup from "../../Subcomponents/Popup/popup";
import Input from "../../Subcomponents/form/input";
import Myform from "../../Subcomponents/form/myform";
import DeleteIcon from "@mui/icons-material/Delete";

const Recipients = ({ details, notMyProject }) => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        background: "var(--green-20)",
        padding: "var(--padding-main)",
        borderRadius: "var(--border-radius)",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "var(--padding-light)",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Report Recipients
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--padding-light)",
        }}
      >
        <Add setIsAdding={setIsAdding} />
        {details.recipients &&
          details.recipients.length > 0 &&
          details.recipients.map((recipient, index) => (
            <RecipientTag
              key={"recipient" + index}
              recipient={recipient}
              details={details}
            />
          ))}
      </div>
      {isAdding && <AddPopup details={details} setIsAdding={setIsAdding} />}
    </div>
  );
};

export default Recipients;

const RecipientTag = ({ recipient, details }) => {
  return (
    <div
      className="imagecard"
      style={{
        color: "white",
        alignItems: "start",
        padding: "var(--padding-light)",
        height: "100px",
      }}
    >
      <div>Email: {recipient.email}</div>
      <div>Wallet: {recipient.wallet}</div>
      <div
        className="deletebutton"
        onClick={() => details.deleteRecipient(recipient.id)}
      >
        X
      </div>
    </div>
  );
};
const Add = ({ setIsAdding }) => {
  return (
    <div
      className="imagecard"
      style={{
        color: "white",
        padding: "var(--padding-light)",
        height: "100px",
      }}
      onClick={() => setIsAdding(true)}
    >
      <AddIcon sx={{ fontSize: "40px" }} />
      <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
        Add Recipient
      </div>
    </div>
  );
};

const AddPopup = ({ details, setIsAdding }) => {
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState("");

  const handleSubmit = () => {
    details.addRecipient(email, wallet);
    // setIsAdding(false);
  };

  return (
    <Popup close={() => setIsAdding(false)}>
      <Myform
        formButton={"Add +"}
        heading={"Add Recipient"}
        handleSubmit={handleSubmit}
        formdata={[
          [
            {
              label: "Email",
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
            },
            {
              label: "Wallet",
              type: "text",
              value: wallet,
              onChange: (e) => setWallet(e.target.value),
            },
          ],
        ]}
      />
    </Popup>
  );
};
