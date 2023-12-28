import FormStepper from "./FormStepper";
import Myform from "../../Subcomponents/form/myform";

const WalletDetails = ({ script }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", padding: "var(--padding-main) 0px" }}>
        <FormStepper step={3} />
      </div>
      <Myform
        heading={"Wallet Details"}
        formdata={script.walletFormData}
        formButton={"Save"}
        handleSubmit={() => {
          script.updateWallet();
        }}
        error={script.error}
      />
    </div>
  );
};

export default WalletDetails;
