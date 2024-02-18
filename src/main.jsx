import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;
import {Wallet} from "./utils/mynear-wallet";

const wallet = new Wallet({createAccessKeyFor: ""});
window.onload = async () => {
  const isSignedIn = await wallet.startUp();
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App
      isSignedIn={isSignedIn}
      wallet={wallet}
    />
  );
};
