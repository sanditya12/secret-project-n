import { useRecoilState } from "recoil";
import { videoState } from "../atoms/video.atom";

const placeholderVideo = {
  ytId: "W01HrqeA2rg",
  title: "Dreamy",
  caption:
    'Remember this conversation we had? u said it was "dreamy". But for me, every chance I got to converse with you always have this dreamy feeling la~',
  caption_details: "string",
  thumbnail: "/PLACEHOLDERS/Banner.png",
  date: "2022-11-3",
  keyword: "Dream, Future, Naming",
  genre: "Romance",
};

export const useVideo = () => {
  const [video, setVideo] = useRecoilState(videoState);

  const getVideo = async () => {
    setVideo(placeholderVideo);
  };

  return { video, getVideo };
};
