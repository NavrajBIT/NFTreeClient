import React, {useEffect} from "react";
import Navbar from "./Components/Subcomponents/Navbar/Navbar";
import Footer from "./Components/Subcomponents/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {AuthProvider} from "./Contexts/AuthContext";
import {WalletProvider} from "./Contexts/WalletContext";
import ScrollToTop from "./Components/Subcomponents/Navbar/subcomponents/scrollToTop";

function App() {
  var client_id =
    "28129239044-8k33sm43ff8qilml9tej6f3jorm9gnmh.apps.googleusercontent.com";

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
