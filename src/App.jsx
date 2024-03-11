import React, { useEffect } from "react";
import Navbar from "./Components/Subcomponents/Navbar/Navbar";
import Footer from "./Components/Subcomponents/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider, useAuth } from "./Contexts/AuthContext";
import { useWallet, WalletProvider } from "./Contexts/walletContext";
import ScrollToTop from "./Components/Subcomponents/Navbar/subcomponents/scrollToTop";

function App() {
  var client_id =
    "729677619048-do4fcs1pdclosvtlf1sm2vloncq2ios5.apps.googleusercontent.com";
  return (
    <AuthProvider>
      <WalletProvider>
        <GoogleOAuthProvider clientId={client_id}>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Footer />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </WalletProvider>
    </AuthProvider>
  );
}

export default App;
