import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AccountProvider, WalletDevTool } from "react-sdk";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AccountProvider>
			<App />
			<WalletDevTool />
		</AccountProvider>
	</React.StrictMode>
);
