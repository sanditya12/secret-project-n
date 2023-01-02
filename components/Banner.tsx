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

const Banner = () => {
  const [showVideoModal, setShowVideoModal] = useRecoilState(videoModalState);
  const [video, setVideo] = useRecoilState(videoState);
  const [isLoading, setIsLoading] = useState(true);
  const num = Math.floor(Math.random() * 21 + 1);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<GetVideoResponse>(
          `https://urchin-app-hfuu4.ondigitalocean.app/api/videos/${num}?populate=*`
        );
        const { title, ytId, thumbnail, date, genre, keyword, caption } =
          data.data.attributes;
        const format = thumbnail.data.attributes.formats;
        setVideo({
          title,
          ytId,
          genre,
          keyword,
          caption,
          thumbnail: format.large
            ? format.large.url
            : format.small
            ? format.small.url
            : format.thumbnail.url,
          date,
        });
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="h-[80vh] px-[4%]">
      {isLoading ? (
        <div className="bg-dark absolute top-0 left-0 -z-10 h-[110vh] w-screen  bg-gradient-to-r  from-dark via-dark/10 to-transparent ">
          {" "}
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
export default Banner;
