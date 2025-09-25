import React from "react";
import ReactDOM from "react-dom/client";
import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, base } from "wagmi/chains";

const wagmiAdapter = new WagmiAdapter({
  chains: [mainnet, base],
  projectId: "YOUR_WALLETCONNECT_PROJECT_ID" // Replace with your Project ID from https://cloud.walletconnect.com
});

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, base]
});

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>⚡ Mini Web3 DApp</h1>
      <p>Click the button below to connect your wallet:</p>
      <button
        onClick={() => modal.open()}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "10px",
          background: "#4cafef",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Connect Wallet
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
