interface Props {
  className?: string;
  author: string;
  message: string;
}

const Chat = ({ className, author, message }: Props) => {
  return (
    <div className={`flex mb-2 ${author === "sha" && "justify-end"}`}>
      <div className={`rounded py-2 px-3 bg-grey-2 `}>
        <h3
          className={`text-md ${
            author === "sha" ? "text-red" : "text-teal-500"
          }`}
        >
          {author}
        </h3>
        <p className="text-sm mt-1 text-light whitespace-pre-wrap">{message}</p>
      </div>
    </div>
  );
};
export default Chat;
