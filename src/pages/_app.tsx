import "../app/globals.css"; // or the relative path to the global styles file
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
