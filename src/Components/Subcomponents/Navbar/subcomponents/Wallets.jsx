import {useState, useEffect} from "react";
import {useWallet} from "../../../../Contexts/WalletContext";

import Solflare from "./SolanaWallets/Solflare";
import Phantom from "./SolanaWallets/Phantom";

const Wallets = () => {
  const [walletDropdown, setWalletDropdown] = useState(false); //for wallet dropdown menu
  const [disconnectDropdown, setDisconnectDropdown] = useState(false); //for displaying disconnect button as dropdown
  const [isWalletConnected, setIsWalletConnected] = useState(false); //holding state if wallet is connected or not
  const [walletAddress, setWalletAddress] = useState(null); //for wallet address state
  const [walletInfo, setWalletInfo] = useState({
    //holding the wallet instance of selected wallet
    id: "",
    key: ""
  });
  const [loading, setLoading] = useState(false);

  const wallet = useWallet();

  //Solana Wallets to render in dropdown,
  const wallets = [
    {
      name: "Solflare Wallet",
      component: (
        <Solflare
          setIsWalletConnected={setIsWalletConnected}
          setWalletAddress={setWalletAddress}
          setWalletInfo={setWalletInfo}
          setWalletDropdown={setWalletDropdown}
          setLoading={setLoading}
        />
      ),
      image: "/assets/solflare.png"
    },
    {
      name: "Phantom Wallet",
      component: (
        <Phantom
          setIsWalletConnected={setIsWalletConnected}
          setWalletAddress={setWalletAddress}
          setWalletInfo={setWalletInfo}
          setWalletDropdown={setWalletDropdown}
          setLoading={setLoading}
        />
      ),
      image: "/assets/phantom.png"
    }
  ];

  //Set the wallet address state to the context api
  useEffect(() => {
    wallet.setAddress(walletAddress);
  }, [walletAddress]);

  //handler to disconnect from connected wallet
  const disconnectWallet = async () => {
    if (walletInfo.key === "SOLFLARE") {
      await wallet.provider.disconnect();
    } else if (walletInfo.key === "PHANTOM") {
      await wallet.provider.disconnect();
    }
    setDisconnectDropdown(false);
  };

  return (
    <>
      <div className='secondaryButton homeButtonProp'>
        {isWalletConnected ? (
          // Dropdown button for signed-in state
          <div
            style={{
              position: "relative",
              display: "inline-block"
            }}>
            <button
              onClick={() => {
                setDisconnectDropdown(prev => !prev);
              }}
              style={{
                background: "white",
                color: "var(--green-100)",
                width: "var(--project-button-small)",
                height: "50px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "bold",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center"
              }}>
              {`${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}`}
              <img
                src={wallets[walletInfo.id].image}
                alt={wallets[walletInfo.id].name}
                height={26}
              />
            </button>
            {disconnectDropdown && (
              <div
                onClick={disconnectWallet}
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
                  style={{
                    display: "block",
                    padding: "10px",
                    fontSize: "12px",
                    fontWeight: "bolder",
                    textDecoration: "none",
                    color: "var(--green-100)"
                  }}>
                  Disconnect Wallet
                </a>
              </div>
            )}
          </div>
        ) : (
          // Button for not signed-in state
          <div
            style={{
              position: "relative",
              display: "inline-block"
            }}>
            <button
              onClick={() => {
                if (!loading) setWalletDropdown(prev => !prev);
              }}
              style={{
                background: "white",
                color: "var(--green-100)",
                width: "var(--project-button-small)",
                height: "50px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                fontSize: "10px",
                fontWeight: "bold",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center"
              }}>
              {loading ? "Connecting..." : "Connect Solana Wallet"}

              <img
                src='/assets/solana_logo.png'
                alt='solana logo'
                height={26}
              />
            </button>
            {walletDropdown && (
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
                {wallets?.map((wallet, index) => {
                  return (
                    <div
                      key={wallet.name}
                      onClick={() => {
                        setWalletInfo(prev => {
                          return {
                            ...prev,
                            id: index
                          };
                        });
                      }}>
                      {wallet.component}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Wallets;
