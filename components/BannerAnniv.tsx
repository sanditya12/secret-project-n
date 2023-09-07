import Image from "next/image";
import ButtonWithIconText from "./buttons/ButtonWithIconText";
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { videoModalState } from "../atoms/video-modal.atom";
import { useRecoilState } from "recoil";
import { useVideo } from "../hooks/useVideo";
import { videoState } from "../atoms/video.atom";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetVideoResponse } from "../hooks/useVideoTypes";

const BannerAnniv = () => {
  //   const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="h-[80vh] px-[4%]">
      <>
        <div className="absolute top-0 left-0 -z-10 h-[110vh] w-screen  bg-gradient-to-r  from-dark via-dark/10 to-transparent ">
          <Image
            layout="fill"
            src={`/images/BannerAnniv.png`}
            objectFit="cover"
            className="mix-blend-overlay"
          />
        </div>

        {/* CONTENT */}
        <div className=" h-full w-screen flex flex-col text-center justify-center relative top-[40%]">
          <h1 className="pb-4 text-5xl">Happy Tanggal 7 ke 12 kali</h1>
          <h2 className="pb-4">
            365 hari telah berlalu, aku bersyukur bisa melewati semuanya
            denganmu.
            <br />
            Senyum sedih telah kita lalui bersama. Aku harap kembali lagi kita
            bisa lakukan itu semua, di tahun-tahun kedepannya.
            <br />
            Selamat anniversary ya sayang ku!
          </h2>
        </div>
      </>
    </div>
  );
};
export default BannerAnniv;
