import { Modal } from "@mui/material";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { memoryModalState } from "../../atoms/memory-modal.atom";
import { useMemory } from "../../hooks/useMemory";
import Chats from "../messages/Chats";
import { useEffect, useMemo, useState } from "react";
import { memoriesState, memoryState } from "../../atoms/memories.atom";
import { FiSend } from "react-icons/fi";

const MemoryModal = () => {
  const [showMemoryModal, setShowMemoryModal] =
    useRecoilState(memoryModalState);

  const [memories, setMemories] = useRecoilState(memoriesState);
  const [order, setOrder] = useRecoilState(memoryState);
  const selectedMemory = useMemo(
    () => memories.find((memory) => memory.order === order),
    [memories, order]
  );

  const [newChat, setNewChat] = useState("");

  const handleClose = () => {
    setShowMemoryModal(false);
  };

  const handleMove = () => {
    setOrder((prev) => prev + 1);
    console.log(order);
  };

  const handleMoveLeft = () => {
    setOrder((prev) => prev - 1);
  };

  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewChat(e.target.value);
  };

  const handleSend = () => {
    console.log(newChat);
  };

  // useEffect(() => {
  //   console.log(newChat);
  // }, [newChat]);

  return (
    <Modal
      open={showMemoryModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-[55%] h-[90%] bg-[#181818] overflow-hidden overflow-y-hidden rounded-md scrollbar-hide"
    >
      <>
        <button
          className="flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10 absolute left-2 top-1/2 !z-40 h-9 w-9 border-none hover:bg-[#181818]"
          onClick={handleMoveLeft}
        >
          <HiOutlineChevronLeft className="h-6 w-6" color="#e5e5e5" />
        </button>
        <div className="flex h-full text-light">
          <div className="relative w-[50%]">
            <Image
              src={selectedMemory ? selectedMemory.img : ""}
              className="object-contain bg-dark-grey"
              layout="fill"
            />
          </div>
          <div className="relative w-[50%]">
            <div className="py-3 border-b-2 border-b-grey-2 flex justify-center border-solid w-full">
              <h3 className="font-bold">{selectedMemory?.title}</h3>
            </div>
            <div className="overflow-y-scroll  h-[80%]">
              <Chats chats={selectedMemory?.chats} className="h-full" />
            </div>
            <div className=" w-full h-[11%] flex justify-center items-center space-x-3 px-3 py-1">
              <textarea
                value={newChat}
                onChange={handleTyping}
                className="resize-none h-full w-full bg-dark py-5 px-3 rounded-xl"
                placeholder="type your message here..."
              />
              <button
                className="flex justify-center p-1 hover:bg-grey hover:bg-opacity-30"
                onClick={handleSend}
              >
                <FiSend className="h-6 w-6" color="#e5e5e5" />
              </button>
            </div>
          </div>
        </div>
        <button
          className="flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10 absolute right-2 top-1/2 !z-40 h-9 w-9 border-none hover:bg-[#181818]"
          onClick={handleMove}
        >
          <HiOutlineChevronRight className="h-6 w-6" color="#e5e5e5" />
        </button>
      </>
    </Modal>
  );
};
export default MemoryModal;
