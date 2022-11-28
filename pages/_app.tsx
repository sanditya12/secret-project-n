import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { RecoilRoot } from "recoil";
import { motion } from "framer-motion";
import { useUser } from "../hooks/useUser";
import ProfileShells from "../components/shells/ProfileShells";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
