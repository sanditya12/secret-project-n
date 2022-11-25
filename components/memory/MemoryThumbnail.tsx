import Image from "next/image";
import { memory } from "../../placeholders/memories";

interface Props {
  memory: memory;
}

const MemoryThumbnail = ({ memory }: Props) => {
  return (
    <div className="relative h-40 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image src={memory.img} className="object-cover " layout="fill" />
    </div>
  );
};
export default MemoryThumbnail;
