import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import favicon from '../public/favicon.ico'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <link rel="shortcut icon" href={favicon as unknown as string} />
  </Head>
     <Component {...pageProps} />
  </>;
}
