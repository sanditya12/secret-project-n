import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { RecoilRoot } from "recoil";
import { motion } from "framer-motion";
import { useUser } from "../hooks/useUser";
import ProfileShells from "../components/shells/ProfileShells";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

import { Session } from "next-auth";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
