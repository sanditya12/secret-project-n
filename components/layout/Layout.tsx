import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import LoaderPage from "../loadings/LoaderPage";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { motion } from "framer-motion";
import { videoState } from "../../atoms/video.atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { GetVideoResponse } from "../../hooks/useVideoTypes";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { user } = useUser();
  const router = useRouter();
  const isProfile = router.pathname.includes("/profiles");
  const [isLoading, setIsLoading] = useState(true);
  const [video, setVideo] = useRecoilState(videoState);

  console.log(isProfile);
  useEffect(() => {
    !isProfile && router.push("/profiles");
    isProfile && setIsLoading(false);
    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  }, []);

  // const num = 1;

  // useEffect(() => {
  //   setIsLoading(true);
  //   (async () => {
  //     try {
  //       const { data } = await axios.get<GetVideoResponse>(
  //         `https://urchin-app-hfuu4.ondigitalocean.app/api/videos/${num}?populate=*`
  //       );
  //       const { title, ytId, thumbnail, date, genre, keyword, caption } =
  //         data.data.attributes;
  //       const format = thumbnail.data.attributes.formats;
  //       setVideo({
  //         title,
  //         ytId,
  //         genre,
  //         keyword,
  //         caption,
  //         thumbnail: format.large ? format.large.url : format.small.url,
  //         date,
  //       });
  //     } catch (e) {
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  return isLoading ? (
    <LoaderPage />
  ) : (
    <div className="font-netflix-sans text-white relative overflow-x-clip ">
      {user && <Header />}
      {children}
      {user && <Footer />}
    </div>
  );
};

export default Layout;
