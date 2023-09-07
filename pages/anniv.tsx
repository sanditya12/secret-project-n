import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Calendar from "../components/calendar/CalendarSection";
import { generateDate } from "../components/calendar/util/calendar";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import BannerAnniv from "../components/BannerAnniv";

const Anniv: NextPage = () => {
  // console.log(generateDate());

  return (
    <div className=" bg-gradient-to-b-anniv from-transparent to-dark ">
      <Head>
        <title>Shalamanya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[95vh]">
        <Header />
        <BannerAnniv />
        <Calendar />
        <Footer />
      </main>
    </div>
  );
};

export default Anniv;
