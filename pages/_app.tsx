import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>Cinema Movies</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
