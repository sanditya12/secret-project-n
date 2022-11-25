import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { memories, memory } from "../../placeholders/memories";
import { useRef, useState } from "react";
import Thumbnail from "./MemoryThumbnail";
import Memory from "./MemoryThumbnail";

interface Props {
  className?: string;
}

const Memories = ({ className }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const part = 1;
  return (
    <div className="h-40 space-y-0.5 ">
      <h2>Chapter {part}</h2>
      <div className="group relative md:-ml-2">
        <HiOutlineChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2 "
          ref={rowRef}
        >
          {memories.map((memory) => (
            <Memory memory={memory} />
          ))}
        </div>
        <HiOutlineChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};
export default Memories;
