import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";
import {  sepolia } from "wagmi/chains";

const chains = [sepolia ];

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: "fLyKS73P8j9mbSy8jpASyBR_dD9QQFgg", // or infuraId
    walletConnectProjectId: "2f1191ba25be821c4c7a6b1d5f6959ed",

    // Required
    appName: "Your App Name",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    chains,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Component {...pageProps} />;
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
