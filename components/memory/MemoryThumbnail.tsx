import Image from "next/image";
import { useRecoilState } from "recoil";
import { Memory } from "../../atoms/memories.atom";
import { memoryModalState } from "../../atoms/memory-modal.atom";
import { useMemory } from "../../hooks/useMemory";
import { memory } from "../../placeholders/memories";

interface Props {
  memory: Memory;
}

const MemoryThumbnail = ({ memory }: Props) => {
  const { setOrder } = useMemory();
  const [showMemoryModal, setShowMemoryModal] =
    useRecoilState(memoryModalState);
  return (
    <div
      onClick={() => {
        setShowMemoryModal(true);
        setOrder(memory.order);
      }}
      className="relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110 md:hover:z-30"
    >
      <Image src={memory.img} className="object-cover " layout="fill" />
    </div>
  );
};
export default MemoryThumbnail;
