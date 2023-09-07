import { useRecoilState } from "recoil";
import { chat, memoriesState, memoryState } from "../../atoms/memories.atom";
import Chat from "./Chat";

interface Props {
  className?: string;
  chats?: chat[];
}

const Chats = ({ chats, className }: Props) => {
  return (
    <div className={` bg-dark text-light ${className} h-full`}>
      <div className=" bg-dark py-2 px-3">
        {chats?.map((chat) => (
          <Chat author={chat.author} message={chat.content} key={chat.id} />
        ))}
      </div>
    </div>
  );
};
export default Chats;
