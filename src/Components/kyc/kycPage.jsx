import BasicDetails from "./subcomponents/BasicDetails";
import useKyc from "./useKyc";
import LocalLoading from "../Subcomponents/loading/localloading";
import Auth from "../Auth/Auth";
import OtpForm from "./subcomponents/OtpForm";
import OrganizationDetails from "./subcomponents/OrganizationDetails";
import WalletDetails from "./subcomponents/WalletDetails";

const KYCPage = () => {
  const script = useKyc();

  const formContent = (step) => {
    switch (step) {
      case 1:
        return <BasicDetails script={script} />;
      case 2:
        return <OtpForm script={script} />;
      case 3:
        return <OrganizationDetails script={script} />;
      case 4:
        return <WalletDetails script={script} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  if (!script.isLoggedIn)
    return <Auth close={() => script.setIsLoggedIn(true)} />;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        padding: "var(--nav-height) 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--padding-main)",
        }}
      >
        {formContent(script.step)}
        {script.kycStatus && script.kycStatus.is_applied && (
          <div
            style={{
              width: "100%",
              maxWidth: "var(--max-width-form)",
              height: "100%",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--filter-dark)",
              color: "var(--blank-light)",
              borderRadius: "var(--border-radius)",
              fontSize: "1.25rem",
              textAlign: "center",
            }}
          >
            {script.kycStatus.status != "Approved" && (
              <h3>You have already applied for KYC</h3>
            )}
            <h3>Your KYC Status is {script.kycStatus.status}</h3>
            {script.kycStatus.status != "Approved" && (
              <h3>Please wait for some time</h3>
            )}
          </div>
        )}
      </div>
      {script.isLoading && <LocalLoading />}
    </div>
  );
};

export default KYCPage;
