import axios from "axios";
import { useEffect, useState } from "react";
import { GetLetterResponse } from "../hooks/useLetterTypes";
import ReactMarkdown from "react-markdown";
import {
  HiChevronDown,
  HiOutlineChevronDoubleDown,
  HiOutlineChevronDoubleUp,
} from "react-icons/hi";

const Letter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [letter, setLetter] = useState<GetLetterResponse>(
    {} as GetLetterResponse
  );
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<GetLetterResponse>(
          "https://urchin-app-hfuu4.ondigitalocean.app/api/letter"
        );
        setLetter(data);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleClick = () => {
    setIsCollapsed((prev) => !prev);
  };

  return isLoading ? (
    <div></div>
  ) : (
    <div
      className={`${
        isCollapsed ? "bg-light text-dark" : "bg-red"
      }  px-[4%] pt-10`}
    >
      <div
        className={`h-full ${!isCollapsed && "max-h-[12rem]"}   overflow-clip`}
      >
        <h4 className="">{letter.data.attributes.title}</h4>
        <p className="whitespace-pre-wrap">{letter.data.attributes.content}</p>
      </div>
      <div className="py-5 ">
        {isCollapsed ? (
          <HiOutlineChevronDoubleUp
            className="  m-auto h-9 w-9 cursor-pointer transition hover:scale-125"
            onClick={handleClick}
          />
        ) : (
          <HiOutlineChevronDoubleDown
            className="  m-auto h-9 w-9 cursor-pointer transition hover:scale-125 "
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};
export default Letter;
