import Image from "next/image";
import ButtonWithIconText from "./buttons/ButtonWithIconText";
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { videoModalState } from "../atoms/video-modal.atom";
import { useRecoilState } from "recoil";
import { useVideo } from "../hooks/useVideo";

const Banner = () => {
  const [showVideoModal, setShowVideoModal] = useRecoilState(videoModalState);
  const { video } = useVideo();

  return (
    <div className="h-[80vh] px-[4%]">
      <div className="absolute top-0 left-0 -z-10 h-[110vh] w-screen  bg-gradient-to-r  from-dark via-dark/10 to-transparent ">
        <Image
          layout="fill"
          src={`${video.thumbnail}`}
          objectFit="cover"
          className="mix-blend-overlay"
        />
      </div>

      {/* CONTENT */}
      <div className=" h-full flex flex-col justify-center max-w-2xl relative top-[10%]">
        <h1 className="pb-4">{video.title}</h1>
        <h2 className="pb-4">{video.caption}</h2>
        <div className="flex space-x-3">
          <ButtonWithIconText
            text="Play"
            type="white"
            onClick={() => {
              setShowVideoModal(true);
            }}
          >
            <FaPlay />
          </ButtonWithIconText>
          <ButtonWithIconText
            text="More Info"
            type="grey"
            onClick={() => {
              setShowVideoModal(true);
            }}
          >
            <HiOutlineInformationCircle />
          </ButtonWithIconText>
        </div>
      </div>
    </div>
  );
};
export default Banner;
