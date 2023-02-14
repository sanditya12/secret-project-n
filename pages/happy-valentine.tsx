import type { NextPage } from "next";
import Head from "next/head";
import Envelope from "../components/valentine/Envelope";
import HeaderVal from "../components/valentine/header";
import Koass from "../components/valentine/Koass";

const HappyValentine: NextPage = () => {
  return (
    <div className="bg-valentine-background text-valentine-red font-josefin-sans">
      <Head>
        <title>Happy Valentine!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderVal />
      <main className="min-h-[300vh]">
        <section className="flex items-center justify-center min-h-[105vh] pt-40">
          <Envelope />
        </section>
        <section className=" flex items-center justify-center min-h-[200vh] ">
          <Koass />
        </section>
        <section></section>
      </main>
    </div>
  );
};

export default HappyValentine;
