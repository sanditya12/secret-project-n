import { atom } from "recoil";

export interface Video {
  ytId: string;
  title: string;
  caption: string;
  caption_details?: string;
  thumbnail: string;
  date?: string;
  genre?: string;
  keyword?: string;
}

const defaultVideo: Video = {
  ytId: "",
  title: "",
  caption: "",
  caption_details: "",
  thumbnail: "",
  date: "",
  genre: "",
  keyword: "",
};

export const videoState = atom<Video>({
  key: "videoState",
  default: defaultVideo,
});
