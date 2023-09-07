import Image from "next/image";
import { daysjsToDateString, generateDate } from "./util/calendar";
import dayjs from "dayjs";
import { ReactNode, useEffect, useRef, useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

interface Props {
  children?: ReactNode;
  className?: string;
  owner?: string;
}

interface Feeling {
  date: dayjs.Dayjs;
  color: string;
}

const Calendar = ({ owner }: Props) => {
  const days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [today, setToday] = useState<dayjs.Dayjs>(dayjs());
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);
  const [feelings, setFeelings] = useState<Feeling[]>([]);

  const handleSelectColor = (date: dayjs.Dayjs, color: string) => {
    const newFeeling = { date: date, color: color };
    const newFeelings = feelings;
    const index = feelings.findIndex((feeling) => feeling.date.isSame(date));

    console.log(newFeeling);
    if (index !== -1) {
      newFeelings[index] = newFeeling;
    } else {
      newFeelings.push(newFeeling);
    }
    setFeelings(newFeelings);
  };

  useEffect(() => {
    console.log(feelings);
  }, [feelings]);

  const getDateColor = (date: dayjs.Dayjs): string => {
    const foundFeeling = feelings.find((feeling) => feeling.date.isSame(date));

    if (foundFeeling) {
      return foundFeeling.color;
    }
    return " ";
  };

  const handleSelectDate = (
    date: dayjs.Dayjs | null,
    isCurrentMonth: boolean
  ) => {
    if (isCurrentMonth) setSelectedDate(date);
  };

  const buttonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setSelectedDate(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLeft = () => {
    setToday(today.month(today.month() - 1));
  };

  const handleRight = () => {
    setToday(today.month(today.month() + 1));
  };

  return (
    <>
      <div
        className={`w-[25rem] h-[25rem] text-center  text-dark bg-calendar bg-center bg-contain bg-no-repeat pt-[2.8rem] relative`}
      >
        <button
          className="flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10 absolute left-6 top-1/2 !z-40 h-7 w-7 border-none hover:bg-[#181818] mt-4"
          onClick={handleLeft}
        >
          <HiOutlineChevronLeft className="h-4 w-4" color="#e5e5e5" />
        </button>
        <h2 className={`font-bold text-3xl mb-4 font-indie-flower`}>
          {`${months[today.month()]},  ${today.year()}`}
        </h2>
        <div className={`w-60 grid grid-cols-7 mx-auto gap-x-2`}>
          {days.map((day, index) => (
            <h6 key={index} className={`h-4`}>
              {day}
            </h6>
          ))}
        </div>
        <div
          className={`w-60 grid grid-cols-7 mx-auto gap-x-2`}
          ref={buttonRef}
        >
          {generateDate(today.month(), today.year()).map(
            ({ date, isCurrentMonth, isToday }, index) => (
              <button
                key={index}
                className={`h-9 w-9 rounded-full 
              ${isToday && "bg-dark text-white"}
              flex justify-center items-center relative
              ${isCurrentMonth && "hover:outline hover:cursor-pointer  "}
              ${
                daysjsToDateString(selectedDate) === daysjsToDateString(date) &&
                "outline"
              }
               bg-calendar-${getDateColor(date)}
            `}
                onClick={() => handleSelectDate(date, isCurrentMonth)}
              >
                {selectedDate?.isSame(date) && (
                  <div
                    className={`absolute bg-grey-2 -top-6 -right-20 flex px-2 py-2 rounded-md z-10 space-x-2`}
                  >
                    <button
                      className={`rounded-full h-5 w-5 bg-calendar-green hover:outline hover:outline-white`}
                      onClick={() => handleSelectColor(date, "green")}
                    />
                    <button
                      className={`rounded-full h-5 w-5 bg-calendar-blue hover:outline hover:outline-white`}
                      onClick={() => handleSelectColor(date, "blue")}
                    />
                    <button
                      className={`rounded-full h-5 w-5 bg-calendar-red hover:outline hover:outline-white`}
                      onClick={() => handleSelectColor(date, "red")}
                    />
                  </div>
                )}
                <h5 className={`${!isCurrentMonth && "invisible"} `}>
                  {date.date()}
                </h5>
              </button>
            )
          )}
        </div>
        <button
          className="flex items-center justify-center rounded-full border-2 border-[gray] bg-[#2a2a2a]/60 transition hover:border-white hover:bg-white/10 absolute right-6 top-1/2 !z-40 h-7 w-7 border-none hover:bg-[#181818] mt-4"
          onClick={handleRight}
        >
          <HiOutlineChevronRight className="h-4 w-4" color="#e5e5e5" />
        </button>
      </div>
    </>
  );
};
export default Calendar;
