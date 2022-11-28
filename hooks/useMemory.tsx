import axios from "axios";
import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { memoriesState, Memory, memoryState } from "../atoms/memories.atom";
import { GetMemoriesResponse } from "./useMemoryTypes";

export const useMemory = () => {
  const [memories, setMemories] = useRecoilState(memoriesState);
  const [order, setOrder] = useRecoilState(memoryState);

  const selectedMemory = useMemo(
    () => memories.find((memory) => memory.order === order),
    [memories, order]
  );

  const getMemories = async () => {
    try {
      const fetchedMemories = await (
        await axios.get<GetMemoriesResponse>(
          "https://urchin-app-hfuu4.ondigitalocean.app/api/memories/?populate=*",
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
      ).data.data.map(({ attributes }) => {
        const fetchedMemory: Memory = {
          title: attributes.title,
          chats: attributes.Chat,
          img: attributes.img.data.attributes.formats.medium?.url,
          part: attributes.part,
          order: attributes.order,
        };
        return fetchedMemory;
      });
      setMemories(fetchedMemories);
    } catch (error) {
      console.log(error);
    }
  };

  return { memories, selectedMemory, order, setOrder, getMemories };
};
