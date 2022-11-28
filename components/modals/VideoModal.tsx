import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { videoModalState } from "../../atoms/video-modal.atom";
import { MdOutlineClose } from "react-icons/md";
import { Dialog } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { useVideo } from "../../hooks/useVideo";
import { videoState } from "../../atoms/video.atom";

const VideoModal = () => {
  const [showVideoModal, setShowVideoModal] = useRecoilState(videoModalState);
  const [video, setVideo] = useRecoilState(videoState);

  const handleClose = () => {
    setShowVideoModal(false);
  };

  return (
    <Modal
      open={showVideoModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          className="flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10 absolute right-5 top-5 !z-40 h-9 w-9 border-none hover:bg-[#181818]"
          onClick={handleClose}
        >
          <MdOutlineClose className="h-6 w-6" color="#e5e5e5" />
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video.ytId}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            loop={true}
            muted={false}
          />
        </div>
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 pt-10 pb-12 text-light">
          <div className="space-y-4 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">{100}% Match</p>
              <p className="font-light">{video.date}</p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{video.caption}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div>
                  <span className="text-[gray]">Genre:</span> {video.genre}
                </div>

                <div>
                  <span className="text-[gray]">Keyword:</span> {video.keyword}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};
export default VideoModal;
