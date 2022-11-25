import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Memories from "../components/memory/Memories";
import TimeCapsule from "../components/TimeCapsule";
import { BsClockHistory } from "react-icons/bs";
import { GiConversation } from "react-icons/gi";
import Nostalgia from "../components/Nostalgia";

const Home: NextPage = () => {
  return (
    <div className=" bg-gradient-to-b from-transparent to-dark ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-[95vh]">
        <Banner />
        <section>
          <Memories />
        </section>
        <section>
          <Memories />
        </section>
        <section className="bg-light text-dark mt-16 mb-6 relative overflow-hidden">
          <BsClockHistory
            className="absolute opacity-10 -top-20 -left-20"
            size={400}
          />
          <TimeCapsule />
        </section>
        <section>
          <Memories />
        </section>
        <section className="bg-light text-dark mt-16 relative overflow-hidden">
          <GiConversation
            className="absolute opacity-10 -top-20 -right-10"
            size={400}
          />
          <Nostalgia />
        </section>
      </main>
    </div>
  );
};

export default Home;
