import "@/styles/global.css";
import Header from "@/components/header/header";
// import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "@/components/footer/footer";
import "remixicon/fonts/remixicon.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isProd = process.env.NODE_ENV === "production";

  // console.log("router from _App isProd", router, isProd, process.env.NODE_ENV);
  return (
    <>
      <Head>
        <title>Galaxy</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
