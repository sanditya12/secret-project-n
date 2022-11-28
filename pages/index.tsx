import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Memories from "../components/memory/Memories";
import TimeCapsule from "../components/TimeCapsule";
import { BsClockHistory } from "react-icons/bs";
import { GiConversation } from "react-icons/gi";
import Nostalgia from "../components/Nostalgia";
import VideoModal from "../components/modals/VideoModal";
import { useRecoilState } from "recoil";
import { videoModalState } from "../atoms/video-modal.atom";
import { useEffect, useMemo } from "react";
import { useVideo } from "../hooks/useVideo";
import MemoryModal from "../components/modals/MemoryModal";
import { memoryModalState } from "../atoms/memory-modal.atom";
import { useMemory } from "../hooks/useMemory";
import { useUser } from "../hooks/useUser";
import { useRouter } from "next/router";
import { memoriesState, memoryState } from "../atoms/memories.atom";

const Home: NextPage = () => {
  const [showVideoModal, setShowVideoModal] = useRecoilState(videoModalState);
  const { getVideo } = useVideo();

  const [memories, setMemories] = useRecoilState(memoriesState);
  const [order, setOrder] = useRecoilState(memoryState);
  const selectedMemory = useMemo(
    () => memories.find((memory) => memory.order === order),
    [memories, order]
  );

  const [showMemoryModal, setShowMemoryModal] =
    useRecoilState(memoryModalState);

  useEffect(() => {
    getVideo();
  }, []);
  // useEffect(() => {
  //   if (user === "") {
  //     router.push("/profiles");
  //   }
  // });

  // useEffect(() => {
  //   getUserFromLocal();
  // }, []);

  return (
    <div className=" bg-gradient-to-b from-transparent to-dark ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-[95vh]">
        <Banner />
        <section>
          <Memories p={1} />
        </section>
        <section>
          <Memories p={2} />
        </section>
        <section className="bg-light text-dark mt-16 mb-6 relative overflow-hidden">
          <BsClockHistory
            className="absolute opacity-10 -top-20 -left-20"
            size={400}
          />
          <TimeCapsule />
        </section>
        <section className="py-10 ">
          <Memories p={3} />
        </section>
        {/* <section className="bg-light text-dark mt-16 relative overflow-hidden">
          <GiConversation
            className="absolute opacity-10 -top-20 -right-10"
            size={400}
          />
          <Nostalgia />
        </section> */}
      </main>
      {showVideoModal && <VideoModal />}
      {showMemoryModal && selectedMemory && <MemoryModal />}
    </div>
  );
};

export default Home;
