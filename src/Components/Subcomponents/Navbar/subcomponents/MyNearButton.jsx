import {useState, useEffect} from "react";
import {useAuth} from "../../../../Contexts/AuthContext";
const MyNearButton = ({isSignedIn, wallet}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const authContext = useAuth();

  useEffect(() => {
    if (isSignedIn && wallet?.accountId) {
      authContext.setNearAccountId(wallet?.accountId);
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    // Handle sign out logic here
    wallet.signOut();
    // Optionally, you can close the dropdown after signing out
    setShowDropdown(false);
  };

  return (
    <>
      <div className='secondaryButton homeButtonProp'>
        {isSignedIn && wallet?.accountId ? (
          // Dropdown button for signed-in state
          <div
            style={{
              position: "relative",
              display: "inline-block"
            }}>
            <button
              style={{
                background: "white",
                color: "var(--green-100)",
                width: "var(--project-button-small)",
                height: "50px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              onClick={toggleDropdown}>
              {" "}
              {`${wallet?.accountId?.slice(0, 6)}...${wallet?.accountId?.slice(-7)}`}
            </button>
            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,

                  backgroundColor: "white",
                  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                  overflow: "hidden",
                  transition: "maxHeight 0.5s ease-out",
                  maxHeight: "100vh",
                  cursor: "pointer"
                }}>
                <a
                  onClick={handleSignOut}
                  style={{
                    display: "block",
                    padding: "10px",
                    textDecoration: "none",
                    color: "var(--green-100)"
                  }}>
                  Sign Out
                </a>
              </div>
            )}
          </div>
        ) : (
          // Button for not signed-in state
          <button
            onClick={() => wallet.signIn()}
            style={{
              background: "white",
              color: "var(--green-100)",
              width: "var(--project-button-small)",
              height: "50px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              fontSize: "10.5px",
              fontWeight: "700",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px"
            }}>
            Connect MyNear Wallet{" "}
            <img
              src='/public/assets/near-wallet.webp'
              alt='near logo'
              height={20}
            />
          </button>
        )}
      </div>
    </>
  );
};

export default MyNearButton;
