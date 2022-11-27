import { atom } from "recoil";

export interface chat {
  id: number;
  author: string;
  content: string;
}

export interface Memory {
  title: string;
  chats: chat[];
  img: string;
  part: number;
  order: number;
}

const defaultMemories: Memory[] = [];

export const memoriesState = atom<Memory[]>({
  key: "memoriesState",
  default: defaultMemories,
});

export const memoryState = atom({
  key: "memoryState",
  default: 0,
});
