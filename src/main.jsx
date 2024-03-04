import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
