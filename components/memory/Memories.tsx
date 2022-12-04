import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { GetMemoriesResponse } from "../../hooks/useMemoryTypes";
import axios from "axios";
import { memoriesState } from "../../atoms/memories.atom";
import { useRecoilState } from "recoil";
import MemoryThumbnail from "./MemoryThumbnail";

interface Props {
  className?: string;
  p: number;
}

const Memories = ({ className, p }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [memories, setMemories] = useRecoilState(memoriesState);

  useEffect(() => {
    (async () => {
      try {
        const fetchedMemories = await (
          await axios.get<GetMemoriesResponse>(
            "https://urchin-app-hfuu4.ondigitalocean.app/api/memories/?populate=*&pagination[pageSize]=100"
          )
        ).data.data
          .map(({ attributes }) => {
            const imgFormats = attributes.img.data.attributes.formats;
            const fetchedMemory = {
              title: attributes.title,
              chats: attributes.Chat,
              img: imgFormats.medium
                ? imgFormats.medium.url
                : imgFormats.small
                ? imgFormats.small.url
                : imgFormats.thumbnail.url,
              part: attributes.part,
              order: attributes.order,
            };
            return fetchedMemory;
          })
          .sort(({ order: a }, { order: b }) => a - b);

        setMemories(fetchedMemories);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

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

  return (
    <div className="h-40 space-y-0.5 ">
      <h2>Chapter {p}</h2>
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
          {isLoading ? (
            <>
              <div className="relative h-40 min-w-[180px] cursor-pointer bg-grey-2 md:h-36 md:min-w-[260px]"></div>
              <div className="relative h-40 min-w-[180px] cursor-pointer bg-grey-2 md:h-36 md:min-w-[260px]"></div>
              <div className="relative h-40 min-w-[180px] cursor-pointer bg-grey-2 md:h-36 md:min-w-[260px]"></div>
              <div className="relative h-40 min-w-[180px] cursor-pointer bg-grey-2 md:h-36 md:min-w-[260px]"></div>
              <div className="relative h-40 min-w-[180px] cursor-pointer bg-grey-2 md:h-36 md:min-w-[260px]"></div>
            </>
          ) : (
            memories
              .filter((memory) => memory.part === p)
              .map((memory) => (
                <MemoryThumbnail memory={memory} key={memory.order} />
              ))
          )}
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
